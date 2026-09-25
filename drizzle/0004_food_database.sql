CREATE TABLE "foods" (
	"id" integer PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"description" text NOT NULL,
	"category" text,
	"nutrients" jsonb NOT NULL,
	"portions" jsonb NOT NULL,
	"version" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meal_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"meal_id" uuid NOT NULL,
	"position" integer NOT NULL,
	"name" text NOT NULL,
	"food_id" integer,
	"grams" double precision NOT NULL,
	"nutrients" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "nutrients" jsonb;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "matched_share" double precision;--> statement-breakpoint
ALTER TABLE "meal_items" ADD CONSTRAINT "meal_items_meal_id_meals_id_fk" FOREIGN KEY ("meal_id") REFERENCES "public"."meals"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meal_items" ADD CONSTRAINT "meal_items_food_id_foods_id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."foods"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "foods_description_search_idx" ON "foods" USING gin (to_tsvector('english', "description"));--> statement-breakpoint
CREATE INDEX "meal_items_meal_id_idx" ON "meal_items" USING btree ("meal_id");