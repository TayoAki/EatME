CREATE TYPE "public"."body_side" AS ENUM('left', 'right');--> statement-breakpoint
CREATE TYPE "public"."glp1_medication" AS ENUM('semaglutide_injection', 'tirzepatide', 'semaglutide_tablet', 'liraglutide', 'other');--> statement-breakpoint
CREATE TYPE "public"."glp1_schedule" AS ENUM('weekly', 'daily');--> statement-breakpoint
CREATE TYPE "public"."medicine_form" AS ENUM('pen', 'vial', 'tablet');--> statement-breakpoint
CREATE TABLE "glp1_medications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"medication" "glp1_medication" NOT NULL,
	"name" text,
	"form" "medicine_form" NOT NULL,
	"schedule" "glp1_schedule" NOT NULL,
	"dose_weekday" smallint,
	"started_on" date NOT NULL,
	"ended_on" date,
	"doses_per_container" smallint,
	"count_started_at" timestamp with time zone,
	"doses_left_at_count" smallint,
	"unopened_at_count" smallint,
	"opened_on" date,
	"use_within_days" smallint,
	"low_supply_at" smallint DEFAULT 2 NOT NULL,
	"remind_use_by" boolean DEFAULT true NOT NULL,
	"remind_low" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "dose_logs" ADD COLUMN "side" "body_side";--> statement-breakpoint
ALTER TABLE "dose_logs" ADD COLUMN "medication_id" uuid;--> statement-breakpoint
ALTER TABLE "glp1_medications" ADD CONSTRAINT "glp1_medications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "glp1_medications_user_id_idx" ON "glp1_medications" USING btree ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "glp1_medications_current_idx" ON "glp1_medications" USING btree ("user_id") WHERE "glp1_medications"."ended_on" is null;--> statement-breakpoint
ALTER TABLE "dose_logs" ADD CONSTRAINT "dose_logs_medication_id_glp1_medications_id_fk" FOREIGN KEY ("medication_id") REFERENCES "public"."glp1_medications"("id") ON DELETE set null ON UPDATE no action;