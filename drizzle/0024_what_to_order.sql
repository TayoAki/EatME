CREATE TYPE "public"."chain_item_report_reason" AS ENUM('wrong_numbers', 'not_on_menu', 'wrong_item', 'other');--> statement-breakpoint
CREATE TYPE "public"."chain_item_report_status" AS ENUM('open', 'resolved');--> statement-breakpoint
CREATE TYPE "public"."menu_scan_status" AS ENUM('reading', 'ready', 'failed');--> statement-breakpoint
ALTER TYPE "public"."meal_source" ADD VALUE 'menu';--> statement-breakpoint
CREATE TABLE "chain_item_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chain_item_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"reason" "chain_item_report_reason" NOT NULL,
	"note" text,
	"snapshot" jsonb NOT NULL,
	"status" "chain_item_report_status" DEFAULT 'open' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chains" (
	"slug" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"rank" integer,
	"guide_url" text,
	"version" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "menu_scans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"status" "menu_scan_status" DEFAULT 'reading' NOT NULL,
	"restaurant" text,
	"lines" jsonb,
	"photo_keys" text[],
	"restaurant_type" text,
	"dishes" jsonb,
	"analysis_started_at" timestamp with time zone,
	"analysis_attempts" integer DEFAULT 0 NOT NULL,
	"error" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meal_items" ADD COLUMN "menu" jsonb;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "what_to_order_try" text;--> statement-breakpoint
ALTER TABLE "chain_item_reports" ADD CONSTRAINT "chain_item_reports_chain_item_id_chain_items_id_fk" FOREIGN KEY ("chain_item_id") REFERENCES "public"."chain_items"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chain_item_reports" ADD CONSTRAINT "chain_item_reports_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "menu_scans" ADD CONSTRAINT "menu_scans_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "chain_item_reports_user_id_item_idx" ON "chain_item_reports" USING btree ("user_id","chain_item_id");--> statement-breakpoint
CREATE INDEX "chain_item_reports_item_idx" ON "chain_item_reports" USING btree ("chain_item_id");--> statement-breakpoint
CREATE INDEX "menu_scans_user_id_created_at_idx" ON "menu_scans" USING btree ("user_id","created_at");