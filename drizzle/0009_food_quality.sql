CREATE TYPE "public"."processing_level" AS ENUM('whole', 'processed', 'highly_processed');--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "processing" "processing_level";--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "processing_reason" text;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "added_sugar_g" double precision;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "preferences" jsonb DEFAULT '{}'::jsonb NOT NULL;