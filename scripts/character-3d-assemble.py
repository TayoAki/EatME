"""
Puts the character's 3D parts from Tripo together (design/prompts/17-character-3d.md, "Putting it together"): for each
body, one GLB with the rigged body in plain named materials, a face part for the face pictures, the buzz cut and
stubble, every prop fitted and parented to its bone, and the clips. Not used by the app yet.

Run with Blender's Python module (pip install bpy; Blender 5):
    python scripts/character-3d-assemble.py [guy] [girl]
Reads design/character-3d/models (npm run character:3d) and design/character-3d/faces, and writes
design/character-3d/models/character-<body>.glb (git-ignored with the other models).

Every part is in the file; the app shows the ones the look picks and colors the materials by name.
"""
import math
import os
import sys
import warnings

import bpy  # first: Blender's other modules (bmesh, mathutils) load with it
import bmesh
import numpy as np
from mathutils import Matrix, Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS = os.path.join(ROOT, 'design', 'character-3d', 'models')
FACES = os.path.join(ROOT, 'design', 'character-3d', 'faces')

# The default looks (src/shared/character.ts DEFAULT_LOOKS), so the file shows the default character.
LOOKS = {
    'guy': {'skin': '#C68642', 'hair': '#1F1A17', 'top': '#4A90E2', 'bottom': '#33415C'},
    'girl': {'skin': '#F3C79A', 'hair': '#5A3825', 'top': '#FF8A3D', 'bottom': '#33415C'},
}
SHOES = '#2B2B33'
FRAME = '#2A2026'
CLIPS = ['idle', 'wave', 'waiting', 'cheer']
HAIR_STYLES = ['short', 'long', 'bun', 'ponytail']

# Fine tuning per part, in head radii (R) or as factors, checked against renders from the front and side.
TUNE = {
    'hair_short': {'width': 1.2, 'top': 0.16, 'x': -0.08, 'squash': 0.78},
    'hair_long': {'width': 1.32, 'top': 0.1, 'x': -0.1, 'squash': 1.0},
    'hair_bun': {'width': 1.2, 'top': 0.16, 'x': -0.08, 'squash': 0.78},
    'hair_ponytail': {'scale': 1.0, 'x': 0.0, 'lift': 0.04},
    # Width, height and depth in head radii; the top of the U (the sideburns) and its front.
    'beard': {'width': 2.06, 'height': 1.0, 'depth': 0.85, 'top': -0.12, 'front': 0.76},
    'glasses_round': {'width': 0.95, 'front': 1.08},
    'glasses_square': {'width': 0.95, 'front': 1.08},
    # Over the hair; gear_headband_snug is the one for a bald head or a buzz cut. `fit`: inner edge / what it goes round.
    'gear_headband': {'fit': 0.99, 'thickness': 0.07, 'height': 0.3, 'z': 0.42, 'tilt': 8},
    'gear_headband_snug': {'fit': 1.01, 'thickness': 0.07, 'height': 0.3, 'z': 0.42, 'tilt': 8},
    'gear_medal': {'height': 0.55},
    'gear_belt': {'width': 1.16, 'squash': 0.6},
}


def hex_to_linear(value, alpha=1.0):
    rgb = [int(value[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    lin = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in rgb]
    return (*lin, alpha)


def new_material(name):
    material = bpy.data.materials.new(name)
    with warnings.catch_warnings():
        warnings.simplefilter('ignore', DeprecationWarning)
        material.use_nodes = True
    return material


def plain_material(name, color, alpha=1.0, roughness=0.75):
    material = bpy.data.materials.get(name) or new_material(name)
    bsdf = next(n for n in material.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    bsdf.inputs['Base Color'].default_value = hex_to_linear(color)
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = 0.0
    bsdf.inputs['Alpha'].default_value = alpha
    if alpha < 1:
        material.surface_render_method = 'BLENDED'
    return material


def image_material(name, image_path):
    material = new_material(name)
    nodes, links = material.node_tree.nodes, material.node_tree.links
    bsdf = next(n for n in nodes if n.type == 'BSDF_PRINCIPLED')
    texture = nodes.new('ShaderNodeTexImage')
    texture.image = bpy.data.images.load(image_path)
    texture.interpolation = 'Linear'
    links.new(texture.outputs['Color'], bsdf.inputs['Base Color'])
    links.new(texture.outputs['Alpha'], bsdf.inputs['Alpha'])
    bsdf.inputs['Roughness'].default_value = 0.75
    material.surface_render_method = 'BLENDED'
    return material


def import_glb(path):
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=path)
    new = [o for o in bpy.data.objects if o not in before]
    # The importer adds a bone-shape sphere; it isn't part of the model.
    spheres = [o for o in new if o.name.startswith('Icosphere')]
    kept = [o for o in new if o not in spheres]
    for o in spheres:
        bpy.data.objects.remove(o, do_unlink=True)
    return kept


def polygon_colors(obj):
    """The texture color (sRGB, 0–1) under each polygon's center, from its first material's image."""
    material = obj.data.materials[0]
    image = next(n.image for n in material.node_tree.nodes if n.type == 'TEX_IMAGE')
    width, height = image.size
    pixels = np.empty(width * height * 4, np.float32)
    image.pixels.foreach_get(pixels)
    pixels = pixels.reshape(height, width, 4)
    me = obj.data
    uv = np.empty(len(me.loops) * 2, np.float32)
    me.uv_layers.active.data.foreach_get('uv', uv)
    uv = uv.reshape(-1, 2)
    starts = np.empty(len(me.polygons), np.int32)
    totals = np.empty(len(me.polygons), np.int32)
    me.polygons.foreach_get('loop_start', starts)
    me.polygons.foreach_get('loop_total', totals)
    centers = np.add.reduceat(uv, starts) / totals[:, None]
    x = np.clip((centers[:, 0] % 1) * width, 0, width - 1).astype(int)
    y = np.clip((centers[:, 1] % 1) * height, 0, height - 1).astype(int)
    return pixels[y, x, :3]


def polygon_centers(obj):
    me = obj.data
    centers = np.empty(len(me.polygons) * 3, np.float32)
    me.polygons.foreach_get('center', centers)
    normals = np.empty(len(me.polygons) * 3, np.float32)
    me.polygons.foreach_get('normal', normals)
    return centers.reshape(-1, 3), normals.reshape(-1, 3)


def is_skin(colors):
    r, g, b = colors[:, 0], colors[:, 1], colors[:, 2]
    top, bottom = colors.max(1), colors.min(1)
    saturation = (top - bottom) / (top + 1e-6)
    return (r > g) & (g > b) & (saturation > 0.16) & (top > 0.45)


def smooth_labels(obj, labels, passes=2):
    """A polygon whose neighbors mostly carry another label takes theirs (cleans speckles at color edges)."""
    me = obj.data
    edge_faces = {}
    for polygon in me.polygons:
        for key in polygon.edge_keys:
            edge_faces.setdefault(key, []).append(polygon.index)
    neighbors = [[] for _ in me.polygons]
    for faces in edge_faces.values():
        for a in faces:
            neighbors[a].extend(f for f in faces if f != a)
    for _ in range(passes):
        new = labels.copy()
        for index, around in enumerate(neighbors):
            if not around:
                continue
            values, counts = np.unique(labels[around], return_counts=True)
            best = values[counts.argmax()]
            if best != labels[index] and counts.max() >= 2:
                new[index] = best
        labels = new
    return labels


def keep_polygons(obj, keep):
    """Deletes the polygons not kept (and loose vertices). Vertex groups and UVs stay."""
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    bm.faces.ensure_lookup_table()
    bmesh.ops.delete(bm, geom=[f for f in bm.faces if not keep[f.index]], context='FACES')
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
    bm.to_mesh(obj.data)
    bm.free()


def weights(obj, group):
    index = obj.vertex_groups[group].index
    w = np.zeros(len(obj.data.vertices))
    for v in obj.data.vertices:
        for g in v.groups:
            if g.group == index:
                w[v.index] = g.weight
    return w


def fit_sphere(points):
    a = np.c_[2 * points, np.ones(len(points))]
    b = (points ** 2).sum(1)
    solution, *_ = np.linalg.lstsq(a, b, rcond=None)
    center = solution[:3]
    return center, math.sqrt(solution[3] + center @ center)


class Body:
    def __init__(self, name):
        self.name = name
        objects = import_glb(os.path.join(MODELS, f'rig-body_{name}.glb'))
        self.arm = next(o for o in objects if o.type == 'ARMATURE')
        self.mesh = next(o for o in objects if o.type == 'MESH')
        self.mesh.name = self.mesh.data.name = 'body'
        bpy.context.view_layer.update()
        self.bones = {b.name.replace('mixamorig:', ''): (self.arm.matrix_world @ b.head_local, self.arm.matrix_world @ b.tail_local) for b in self.arm.data.bones}
        co = np.array([v.co for v in self.mesh.data.vertices])
        head = co[weights(self.mesh, 'mixamorig:Head') > 0.6]
        # The cranium: the head's upper half (no ears, no face), fitted with a sphere.
        upper = head[head[:, 2] > np.median(head[:, 2])]
        center, radius = fit_sphere(upper)
        self.C = Vector(center)
        self.R = radius
        self.Rz = radius * 45 / 43  # the 2D head is 43 wide and 45 tall (figure.tsx)

    def bone(self, name, end='head'):
        return self.bones[name][0 if end == 'head' else 1]

    def split_materials(self):
        """Skin, top, bottom and shoes from the texture's colors: plain materials the app colors by name."""
        look = LOOKS[self.name]
        colors = polygon_colors(self.mesh)
        centers, _ = polygon_centers(self.mesh)
        skin = is_skin(colors)
        z = centers[:, 2]
        foot = max(self.bone('LeftFoot').z, self.bone('RightFoot').z) + 0.012
        # The top ends where light polygons give way to darker ones on the torso.
        torso = (np.abs(centers[:, 1]) < 0.12) & ~skin & (z > foot) & (z < self.bone('Spine2').z)
        light = colors.max(1) > 0.62
        best, waist = -1, self.bone('Hips').z
        for cut in np.arange(foot + 0.05, self.bone('Spine2').z, 0.004):
            score = (light[torso] & (z[torso] >= cut)).sum() + (~light[torso] & (z[torso] < cut)).sum()
            if score > best:
                best, waist = score, cut
        self.waist = float(waist)
        labels = np.where(skin, 0, np.where(z < foot, 3, np.where(z >= waist, 1, 2)))
        labels = smooth_labels(self.mesh, labels)
        me = self.mesh.data
        me.materials.clear()
        for name, color in [('skin', look['skin']), ('top', look['top']), ('bottom', look['bottom']), ('shoes', SHOES)]:
            me.materials.append(plain_material(name, color))
        me.polygons.foreach_set('material_index', labels.astype(np.int32))
        counts = np.bincount(labels, minlength=4)
        print(f'  {self.name}: skin {counts[0]}, top {counts[1]}, bottom {counts[2]}, shoes {counts[3]} polygons; waist at {self.waist:.3f}')

    def shell(self, name, keep, offset, material):
        """A copy of part of the body pushed out a little: it follows the same bones."""
        obj = self.mesh.copy()
        obj.data = self.mesh.data.copy()
        obj.name = obj.data.name = name
        bpy.context.collection.objects.link(obj)
        keep_polygons(obj, keep)
        bm = bmesh.new()
        bm.from_mesh(obj.data)
        bm.normal_update()
        for v in bm.verts:
            v.co += v.normal * offset
        bm.to_mesh(obj.data)
        bm.free()
        obj.data.materials.clear()
        obj.data.materials.append(material)
        obj.data.polygons.foreach_set('material_index', np.zeros(len(obj.data.polygons), np.int32))
        return obj

    def head_regions(self):
        centers, normals = polygon_centers(self.mesh)
        head_w = weights(self.mesh, 'mixamorig:Head')
        vertex_index = np.empty(len(self.mesh.data.loops), np.int32)
        self.mesh.data.loops.foreach_get('vertex_index', vertex_index)
        starts = np.empty(len(self.mesh.data.polygons), np.int32)
        self.mesh.data.polygons.foreach_get('loop_start', starts)
        on_head = np.minimum.reduceat(head_w[vertex_index], starts) > 0.5
        t = (centers[:, 2] - self.C.z) / self.Rz
        s = np.abs(centers[:, 1] - self.C.y) / self.R
        ear = s > 1.02
        return centers, normals, on_head, t, s, ear

    def make_face(self):
        centers, normals, on_head, t, s, ear = self.head_regions()
        inside = s ** 2 + t ** 2 < 0.95 ** 2
        keep = on_head & inside & (normals[:, 0] > 0.15) & ~ear
        face = self.shell('face', keep, 0.0025, image_material('face', os.path.join(FACES, f'{self.name}-happy.png')))
        # Front-view UVs in the 2D head's frame, so the face pictures land where the drawing has them.
        bm = bmesh.new()
        bm.from_mesh(face.data)
        uv_layer = bm.loops.layers.uv.active
        for f in bm.faces:
            for loop in f.loops:
                co = loop.vert.co
                loop[uv_layer].uv = (0.5 + (co.y - self.C.y) / (2 * self.R), 0.5 + (co.z - self.C.z) / (2 * self.Rz))
        bm.to_mesh(face.data)
        bm.free()
        print(f'  face: {len(face.data.polygons)} polygons')

    def make_buzz_and_stubble(self):
        look = LOOKS[self.name]
        centers, normals, on_head, t, s, ear = self.head_regions()
        front = normals[:, 0]
        buzz = on_head & ~ear & (((front < 0.35) & (t > 0.18)) | (t > 0.62))
        # Like the 2D stubble: the jaw from the sideburns round the chin, its upper edge just under the mouth.
        stubble = on_head & ~ear & (t < -0.27) & (t < -0.71 + 0.55 * s ** 2) & (front > -0.45)
        self.shell('hair_buzz', buzz, 0.004, plain_material('hair', look['hair']))
        # Under the face part (0.0025 out), so the mouth shows on top.
        self.shell('stubble', stubble, 0.0015, plain_material('stubble', look['hair'], alpha=0.32))


def import_prop(name, file=None):
    objects = import_glb(os.path.join(MODELS, f'{file or name}.glb'))
    meshes = [o for o in objects if o.type == 'MESH']
    obj = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.select_all(action='DESELECT')
        for o in meshes:
            o.select_set(True)
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.join()
    obj.name = obj.data.name = name
    obj.parent = None
    obj.matrix_world = Matrix.Identity(4)
    return obj


def skin_polygons(obj):
    """Skin is peach: green and blue stay closer to red than in brown hair (hair 0.5 and 0.2 of red, skin 0.7 and 0.5)."""
    colors = polygon_colors(obj)
    r, g, b = colors[:, 0] + 1e-6, colors[:, 1], colors[:, 2]
    peach = (g / r > 0.64) & (b / r > 0.4) & (colors.mean(1) > 0.42)
    return smooth_labels(obj, peach.astype(np.int32)) == 1


def drop_skin(obj):
    """Deletes the skin: the head inside the first ponytail, the ears on the beard."""
    remove = skin_polygons(obj)
    keep_polygons(obj, ~remove)
    print(f'  {obj.name}: removed {int(remove.sum())} of {len(remove)} polygons as skin')


def own_head(obj):
    """The sphere of the head Tripo put inside a hairpiece: where the hair was made to sit."""
    skin = skin_polygons(obj)
    vertices = sorted({v for p in obj.data.polygons if skin[p.index] for v in p.vertices})
    co = np.array([obj.data.vertices[i].co for i in vertices])
    upper = co[co[:, 2] > np.median(co[:, 2])]
    center, radius = fit_sphere(upper)
    return Vector(center), radius


def bounds(obj):
    co = np.array([v.co for v in obj.data.vertices])
    return Vector(co.min(0)), Vector(co.max(0))


def place(obj, scale, rotation=Matrix.Identity(3), anchor=None, target=None):
    """Scales (per axis) and rotates the prop about its own origin, then moves `anchor` (a point of the prop in its
    own space) to `target` in the world."""
    s = Matrix.Diagonal((*scale, 1.0)) if isinstance(scale, (tuple, list, Vector)) else Matrix.Scale(scale, 4)
    m = rotation.to_4x4() @ s
    world_anchor = m @ anchor
    obj.matrix_world = Matrix.Translation(target - world_anchor) @ m


def parent_to_bone(obj, body, bone):
    bpy.context.view_layer.update()
    world = obj.matrix_world.copy()
    obj.parent = body.arm
    obj.parent_type = 'BONE'
    obj.parent_bone = f'mixamorig:{bone}'
    bpy.context.view_layer.update()
    obj.matrix_world = world


def set_material(obj, material):
    obj.data.materials.clear()
    obj.data.materials.append(material)
    obj.data.polygons.foreach_set('material_index', np.zeros(len(obj.data.polygons), np.int32))


def rename_material(obj, name):
    """Names the prop's textured material for the app; a second copy of the same prop shares the first one's."""
    existing = bpy.data.materials.get(name)
    if existing and existing not in obj.data.materials[:]:
        set_material(obj, existing)
        return
    obj.data.materials[0].name = name


def fit_hair(body, style):
    name = f'hair_{style}'
    # The first ponytail has the better shape. It came with a head: that head goes onto ours, then it's cut out.
    obj = import_prop(name, 'hair_ponytail-v1-with-head' if style == 'ponytail' else None)
    k = TUNE[name]
    if style == 'ponytail':
        center, radius = own_head(obj)
        place(obj, body.R / radius * k['scale'], anchor=center, target=body.C + Vector((k['x'] * body.R, 0, k['lift'] * body.R)))
        drop_skin(obj)
        set_material(obj, plain_material('hair', LOOKS[body.name]['hair']))
        parent_to_bone(obj, body, 'Head')
        return
    lo, hi = bounds(obj)
    s = 2 * body.R * k['width'] / (hi.y - lo.y)
    anchor = Vector(((lo.x + hi.x) / 2, (lo.y + hi.y) / 2, hi.z))
    target = Vector((body.C.x + k['x'] * body.R, body.C.y, body.C.z + body.Rz + k['top'] * body.R))
    # Squashed a little so the fringe clears the brows while the crown still covers the head.
    place(obj, (s, s, s * k['squash']), anchor=anchor, target=target)
    set_material(obj, plain_material('hair', LOOKS[body.name]['hair']))
    parent_to_bone(obj, body, 'Head')


def fit_beard(body):
    obj = import_prop('beard')
    drop_skin(obj)
    k = TUNE['beard']
    lo, hi = bounds(obj)
    size = hi - lo
    scale = (body.R * k['depth'] / size.x, body.R * k['width'] / size.y, body.R * k['height'] / size.z)
    anchor = Vector((hi.x, (lo.y + hi.y) / 2, hi.z))
    target = Vector((body.C.x + k['front'] * body.R, body.C.y, body.C.z + k['top'] * body.Rz))
    place(obj, scale, anchor=anchor, target=target)
    set_material(obj, plain_material('hair', LOOKS[body.name]['hair']))
    parent_to_bone(obj, body, 'Head')


def fit_glasses(body, shape):
    name = f'glasses_{shape}'
    obj = import_prop(name)
    k = TUNE[name]
    lo, hi = bounds(obj)
    scale = 2 * body.R * k['width'] / (hi.y - lo.y)
    eye = body.C.z - 6 / 45 * body.Rz
    anchor = Vector((hi.x, (lo.y + hi.y) / 2, (lo.z + hi.z) / 2))
    target = Vector((body.C.x + k['front'] * body.R, body.C.y, eye))
    place(obj, scale, anchor=anchor, target=target)
    set_material(obj, plain_material('frame', FRAME, roughness=0.5))
    parent_to_bone(obj, body, 'Head')


def band_color(body):
    r, g, b = (int(LOOKS[body.name]['top'][i:i + 2], 16) for i in (1, 3, 5))
    return '#%02X%02X%02X' % tuple(round(c * 0.92) for c in (r, g, b))


def radius_at(points, center, z, band):
    """How far points in front reach from the head's vertical axis at height z (95th percentile). The back doesn't
    count: a ponytail sticks out there, and a band can pass inside the hair at the back."""
    near = points[(np.abs(points[:, 2] - z) < band) & (points[:, 0] > center.x)]
    if not len(near):
        return 0.0
    return float(np.percentile(np.hypot(near[:, 0] - center.x, near[:, 1] - center.y), 95))


def world_points(obj):
    m = np.array(obj.matrix_world)
    co = np.array([v.co for v in obj.data.vertices])
    return co @ m[:3, :3].T + m[:3, 3]


def torus(name, major, thickness, height, segments=64, ring=16):
    """A soft band: a ring whose cross-section is an upright ellipse (thickness out, height up)."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    grid = []
    for i in range(segments):
        theta = 2 * math.pi * i / segments
        row = []
        for j in range(ring):
            phi = 2 * math.pi * j / ring
            r = major + thickness * math.cos(phi)
            row.append(bm.verts.new((r * math.cos(theta), r * math.sin(theta), height * math.sin(phi))))
        grid.append(row)
    for i in range(segments):
        for j in range(ring):
            a, b = grid[i][j], grid[(i + 1) % segments][j]
            c, d = grid[(i + 1) % segments][(j + 1) % ring], grid[i][(j + 1) % ring]
            bm.faces.new((a, b, c, d)).smooth = True
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    obj = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(obj)
    return obj


def fit_headband(body, name):
    """Tripo's headband is a thick tube that squashes into a washer, so the band is a soft torus sized to go round
    the hair at the forehead (or the bald head, for gear_headband_snug)."""
    k = TUNE[name]
    z = body.C.z + k['z'] * body.Rz
    if name == 'gear_headband_snug':
        around = radius_at(np.array([v.co for v in body.mesh.data.vertices]), body.C, z, 0.01)
    else:
        # Sized to the slimmer hairstyles: sinking a little into fuller hair looks right, floating off hair doesn't.
        radii = {style: radius_at(world_points(bpy.data.objects[f'hair_{style}']), body.C, z, 0.012) for style in HAIR_STYLES}
        around = float(np.percentile(list(radii.values()), 25))
        print('  hair at the headband: ' + ', '.join(f'{style} {r / body.R:.2f} R' for style, r in radii.items()))
    thickness = k['thickness'] * body.R
    obj = torus(name, around * k['fit'] + thickness, thickness, k['height'] / 2 * body.R)
    tilt = Matrix.Rotation(math.radians(k['tilt']), 4, 'Y')
    obj.matrix_world = Matrix.Translation((body.C.x, body.C.y, z)) @ tilt
    print(f'  {name}: round {around / body.R:.2f} R at {k["z"]:.2f} up')
    set_material(obj, plain_material('band', band_color(body)))
    parent_to_bone(obj, body, 'Head')


def wrist(body, side):
    hand = body.bone(f'{side}Hand')
    forearm = body.bone(f'{side}ForeArm')
    direction = (hand - forearm).normalized()
    co = np.array([v.co for v in body.mesh.data.vertices])
    near = co[np.linalg.norm(co - np.array(hand), axis=1) < 0.05]
    along = (near - np.array(hand)) @ np.array(direction)
    ring = near[np.abs(along + 0.012) < 0.008]
    radial = ring - np.array(hand) - np.outer((ring - np.array(hand)) @ np.array(direction), np.array(direction))
    radius = float(np.percentile(np.linalg.norm(radial, axis=1), 90)) if len(ring) else 0.025
    return hand, direction, radius


def frame_along(direction):
    """A rotation whose z axis is `direction` and whose x axis points as close to world up as it can."""
    z = direction.normalized()
    up = Vector((0, 0, 1))
    x = (up - z * up.dot(z)).normalized()
    y = z.cross(x)
    return Matrix((x, y, z)).transposed()


def fit_wristbands(body):
    for side in ['Left', 'Right']:
        obj = import_prop(f'gear_wristband_{side.lower()}', 'gear_wristband')
        lo, hi = bounds(obj)
        hand, direction, radius = wrist(body, side)
        size = hi - lo
        scale = (2.5 * radius / size.x, 2.5 * radius / size.y, 1.2 * radius / size.z)
        place(obj, scale, rotation=frame_along(direction), anchor=(lo + hi) / 2, target=hand - direction * radius * 0.9)
        set_material(obj, plain_material('band', band_color(body)))
        parent_to_bone(obj, body, f'{side}ForeArm')


def fit_gloves(body):
    for side in ['Left', 'Right']:
        obj = import_prop(f'gear_glove_{side.lower()}', 'gear_glove')
        if side == 'Right':
            # One glove model, mirrored for the other hand.
            bm = bmesh.new()
            bm.from_mesh(obj.data)
            for v in bm.verts:
                v.co.y = -v.co.y
            bmesh.ops.reverse_faces(bm, faces=bm.faces)
            bm.to_mesh(obj.data)
            bm.free()
        lo, hi = bounds(obj)
        hand = body.bone(f'{side}Hand')
        tip = body.bone(f'{side}Hand', 'tail')
        direction = (tip - hand).normalized()
        # The hand reaches past the bone (fingers): measure it from the vertices the hand bone moves.
        co = np.array([v.co for v in body.mesh.data.vertices])
        reach = (co[weights(body.mesh, f'mixamorig:{side}Hand') > 0.5] - np.array(hand)) @ np.array(direction)
        length = float(reach.max()) if len(reach) else (tip - hand).length
        # Model: cuff to fist along z, back of the hand toward x; fist along the arm, back of the hand up.
        x = (Vector((0, 0, 1)) - direction * direction.z).normalized()
        y = direction.cross(x)
        rotation = Matrix((x, y, direction)).transposed()
        scale = 1.3 * length / (hi.z - lo.z)
        place(obj, scale, rotation=rotation, anchor=(lo + hi) / 2, target=hand + direction * length * 0.5)
        rename_material(obj, 'glove')
        parent_to_bone(obj, body, f'{side}Hand')


def fit_medal(body):
    obj = import_prop('gear_medal')
    k = TUNE['gear_medal']
    lo, hi = bounds(obj)
    collar = body.bone('Neck').z + 0.01
    height = (collar - body.waist) * k['height']
    scale = height / (hi.z - lo.z)
    co = np.array([v.co for v in body.mesh.data.vertices])
    chest_z = collar - height * 0.7
    band = co[(np.abs(co[:, 2] - chest_z) < 0.01) & (np.abs(co[:, 1]) < 0.05)]
    front = float(band[:, 0].max())
    anchor = Vector((lo.x, (lo.y + hi.y) / 2, hi.z))
    target = Vector((front - 0.012, body.C.y, collar))
    place(obj, scale, anchor=anchor, target=target)
    rename_material(obj, 'medal')
    parent_to_bone(obj, body, 'Spine2')


def fit_belt(body):
    obj = import_prop('gear_belt')
    k = TUNE['gear_belt']
    lo, hi = bounds(obj)
    co = np.array([v.co for v in body.mesh.data.vertices])
    ring = co[(np.abs(co[:, 2] - body.waist) < 0.01) & (np.abs(co[:, 1]) < 0.16)]
    width = ring[:, 1].max() - ring[:, 1].min()
    depth = ring[:, 0].max() - ring[:, 0].min()
    sy = width * k['width'] / (hi.y - lo.y)
    sx = max(depth * k['width'] / (hi.x - lo.x), sy * 0.9)
    scale = (sx, sy, sy * k['squash'])
    target = Vector(((ring[:, 0].max() + ring[:, 0].min()) / 2 + 0.006, (ring[:, 1].max() + ring[:, 1].min()) / 2, body.waist))
    place(obj, scale, anchor=(lo + hi) / 2, target=target)
    rename_material(obj, 'belt')
    parent_to_bone(obj, body, 'Hips')


def add_clips(body):
    """Each clip file has the same skeleton; its action moves onto this body as an NLA track named after the clip."""
    body.arm.animation_data_create()
    for clip in CLIPS:
        before = set(bpy.data.actions)
        objects = import_glb(os.path.join(MODELS, f'clip-{clip}-body_{body.name}.glb'))
        action = next(a for a in bpy.data.actions if a not in before)
        action.name = clip
        action.use_fake_user = True
        for o in objects:
            bpy.data.objects.remove(o, do_unlink=True)
        track = body.arm.animation_data.nla_tracks.new()
        track.name = clip
        strip = track.strips.new(clip, int(action.frame_range[0]), action)
        if hasattr(strip, 'action_slot') and len(action.slots):
            strip.action_slot = action.slots[0]
        print(f'  clip {clip}: {action.frame_range[1] - action.frame_range[0]:.0f} frames')
    body.arm.animation_data.action = None


def assemble(name):
    print(f'{name}:')
    bpy.ops.wm.read_factory_settings(use_empty=True)
    body = Body(name)
    print(f'  head: center {tuple(round(v, 3) for v in body.C)}, radius {body.R:.3f}')
    body.split_materials()
    body.make_face()
    body.make_buzz_and_stubble()
    for style in HAIR_STYLES:
        fit_hair(body, style)
    fit_beard(body)
    for shape in ['round', 'square']:
        fit_glasses(body, shape)
    fit_headband(body, 'gear_headband')
    fit_headband(body, 'gear_headband_snug')
    fit_wristbands(body)
    fit_medal(body)
    fit_gloves(body)
    fit_belt(body)
    add_clips(body)
    out = os.path.join(MODELS, f'character-{name}.glb')
    bpy.ops.export_scene.gltf(
        filepath=out,
        export_format='GLB',
        export_animation_mode='NLA_TRACKS',
        export_apply=False,
    )
    print(f'  wrote {os.path.relpath(out, ROOT)} ({os.path.getsize(out) / 1e6:.1f} MB)')


if __name__ == '__main__':
    for name in [a for a in sys.argv[1:] if a in LOOKS] or list(LOOKS):
        assemble(name)
