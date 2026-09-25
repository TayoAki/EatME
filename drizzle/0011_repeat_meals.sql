CREATE TYPE "public"."repeat_response" AS ENUM('logged', 'skipped');--> statement-breakpoint
ALTER TYPE "public"."meal_status" ADD VALUE 'saved';--> statement-breakpoint
CREATE TABLE "meal_repeat_responses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"repeat_id" uuid NOT NULL,
	"date" date NOT NULL,
	"response" "repeat_response" NOT NULL,
	"meal_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meal_repeats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"saved_meal_id" uuid NOT NULL,
	"weekdays" smallint[] NOT NULL,
	"time" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "saved_meal_id" uuid;--> statement-breakpoint
ALTER TABLE "meal_repeat_responses" ADD CONSTRAINT "meal_repeat_responses_repeat_id_meal_repeats_id_fk" FOREIGN KEY ("repeat_id") REFERENCES "public"."meal_repeats"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meal_repeat_responses" ADD CONSTRAINT "meal_repeat_responses_meal_id_meals_id_fk" FOREIGN KEY ("meal_id") REFERENCES "public"."meals"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meal_repeats" ADD CONSTRAINT "meal_repeats_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meal_repeats" ADD CONSTRAINT "meal_repeats_saved_meal_id_meals_id_fk" FOREIGN KEY ("saved_meal_id") REFERENCES "public"."meals"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "meal_repeat_responses_repeat_id_date_idx" ON "meal_repeat_responses" USING btree ("repeat_id","date");--> statement-breakpoint
CREATE UNIQUE INDEX "meal_repeats_saved_meal_id_idx" ON "meal_repeats" USING btree ("saved_meal_id");--> statement-breakpoint
CREATE INDEX "meal_repeats_user_id_idx" ON "meal_repeats" USING btree ("user_id");--> statement-breakpoint
ALTER TABLE "meals" ADD CONSTRAINT "meals_saved_meal_id_meals_id_fk" FOREIGN KEY ("saved_meal_id") REFERENCES "public"."meals"("id") ON DELETE set null ON UPDATE no action;