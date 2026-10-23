import ExpoModulesCore
import ImageIO
import UIKit
import Vision

/// What to order (v2.5): reads every line of text on a menu photo with Apple's on-device Vision
/// framework, so the photo stays on the phone and only the text is sent (WHAT-TO-ORDER.md §8).
/// Boxes come back normalized to 0-1000 with the origin at the top left (src/shared/menu-lines.ts
/// turns them into dish lines). Adapted from ChartME's chart-text-recognition module.
public class MenuTextModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MenuText")

    AsyncFunction("read") { (uri: URL, promise: Promise) in
      DispatchQueue.global(qos: .userInitiated).async {
        guard let image = UIImage(contentsOfFile: uri.path), let cgImage = image.cgImage else {
          promise.reject("ERR_IMAGE", "The image could not be opened.")
          return
        }
        let request = VNRecognizeTextRequest()
        request.recognitionLevel = .accurate
        // Dish names are words: language correction helps more than it hurts (prices are kept by the layout).
        request.usesLanguageCorrection = true
        request.recognitionLanguages = ["en-US"]
        request.minimumTextHeight = 0.008

        // A photo taken upright carries its orientation; Vision needs it to read the lines the right way up.
        let handler = VNImageRequestHandler(cgImage: cgImage, orientation: MenuTextModule.orientation(image.imageOrientation), options: [:])
        do {
          try handler.perform([request])
        } catch {
          promise.reject("ERR_VISION", error.localizedDescription)
          return
        }
        let lines: [[String: Any]] = (request.results ?? []).compactMap { observation in
          guard let candidate = observation.topCandidates(1).first else { return nil }
          // Vision's box is normalized with the origin at the bottom left (in the upright image).
          let box = observation.boundingBox
          return [
            "text": candidate.string,
            "box": [
              "x0": Double(box.minX) * 1000,
              "x1": Double(box.maxX) * 1000,
              "y0": Double(1 - box.maxY) * 1000,
              "y1": Double(1 - box.minY) * 1000,
            ],
          ]
        }
        promise.resolve(lines)
      }
    }
  }

  private static func orientation(_ orientation: UIImage.Orientation) -> CGImagePropertyOrientation {
    switch orientation {
    case .up: return .up
    case .down: return .down
    case .left: return .left
    case .right: return .right
    case .upMirrored: return .upMirrored
    case .downMirrored: return .downMirrored
    case .leftMirrored: return .leftMirrored
    case .rightMirrored: return .rightMirrored
    @unknown default: return .up
    }
  }
}
