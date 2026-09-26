ALTER TYPE "public"."meal_source" ADD VALUE 'restaurant';--> statement-breakpoint
ALTER TABLE "meal_items" ADD COLUMN "restaurant" jsonb;