CREATE TYPE "public"."activity_level" AS ENUM('sedentary', 'light', 'active', 'very_active');--> statement-breakpoint
CREATE TYPE "public"."diet" AS ENUM('classic', 'pescatarian', 'vegetarian', 'vegan');--> statement-breakpoint
CREATE TYPE "public"."gender" AS ENUM('male', 'female', 'other');--> statement-breakpoint
CREATE TYPE "public"."goal" AS ENUM('lose', 'maintain', 'gain');--> statement-breakpoint
CREATE TYPE "public"."meal_status" AS ENUM('analyzing', 'completed', 'failed');--> statement-breakpoint
CREATE TYPE "public"."plan_source" AS ENUM('ai', 'formula');--> statement-breakpoint
CREATE TYPE "public"."unit_system" AS ENUM('metric', 'imperial');--> statement-breakpoint
CREATE TABLE "meals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"status" "meal_status" DEFAULT 'analyzing' NOT NULL,
	"name" text,
	"calories" integer,
	"protein_g" integer,
	"carbs_g" integer,
	"fat_g" integer,
	"image_url" text,
	"image_file_id" text,
	"image_path" text,
	"trigger_run_id" text,
	"error" text,
	"logged_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text,
	"first_name" text,
	"last_name" text,
	"image_url" text,
	"gender" "gender",
	"date_of_birth" date,
	"height_cm" double precision,
	"weight_kg" double precision,
	"goal" "goal",
	"target_weight_kg" double precision,
	"activity_level" "activity_level",
	"weekly_goal_kg" double precision,
	"diet" "diet",
	"unit_system" "unit_system" DEFAULT 'metric' NOT NULL,
	"timezone" text DEFAULT 'UTC' NOT NULL,
	"daily_calories" integer,
	"daily_protein_g" integer,
	"daily_carbs_g" integer,
	"daily_fat_g" integer,
	"plan_source" "plan_source",
	"plan_summary" text,
	"onboarding_completed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meals" ADD CONSTRAINT "meals_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "meals_user_id_logged_at_idx" ON "meals" USING btree ("user_id","logged_at");