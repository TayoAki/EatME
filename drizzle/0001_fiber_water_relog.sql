CREATE TYPE "public"."meal_confidence" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TYPE "public"."meal_source" AS ENUM('photo', 'text', 'label', 'copy', 'barcode', 'food');--> statement-breakpoint
CREATE TABLE "water_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"amount_ml" integer NOT NULL,
	"logged_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "fiber_g" integer;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "confidence" "meal_confidence";--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "source" "meal_source" DEFAULT 'photo' NOT NULL;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "is_favorite" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "portion" double precision DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "base_nutrition" jsonb;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "daily_fiber_g" integer;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "daily_water_ml" integer;--> statement-breakpoint
ALTER TABLE "water_logs" ADD CONSTRAINT "water_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "water_logs_user_id_logged_at_idx" ON "water_logs" USING btree ("user_id","logged_at");