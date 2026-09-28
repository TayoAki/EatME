CREATE TYPE "public"."checkin_reason" AS ENUM('ok', 'not_enough_logging', 'not_enough_weights', 'calorie_floor', 'bmi_floor', 'fast_loss', 'glp1_hold', 'goal_reached');--> statement-breakpoint
CREATE TYPE "public"."checkin_status" AS ENUM('proposed', 'accepted', 'kept');--> statement-breakpoint
CREATE TABLE "target_checkins" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"week_start" date NOT NULL,
	"estimated_kcal" integer,
	"average_intake" integer,
	"data_days" integer NOT NULL,
	"trend_per_week_kg" double precision,
	"previous_kcal" integer NOT NULL,
	"proposed_kcal" integer,
	"status" "checkin_status" DEFAULT 'proposed' NOT NULL,
	"reason" "checkin_reason" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "target_checkins" ADD CONSTRAINT "target_checkins_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "target_checkins_user_week_idx" ON "target_checkins" USING btree ("user_id","week_start");