ALTER TYPE "public"."meal_source" ADD VALUE 'drink';--> statement-breakpoint
ALTER TABLE "meal_items" ADD COLUMN "drink" jsonb;