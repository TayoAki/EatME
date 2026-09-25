CREATE TYPE "public"."product_source" AS ENUM('off', 'usda');--> statement-breakpoint
CREATE TABLE "products" (
	"code" text PRIMARY KEY NOT NULL,
	"source" "product_source",
	"name" text,
	"brand" text,
	"serving_size" text,
	"serving_grams" double precision,
	"package_grams" double precision,
	"nutrients" jsonb,
	"fetched_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meal_items" ADD COLUMN "product_code" text;