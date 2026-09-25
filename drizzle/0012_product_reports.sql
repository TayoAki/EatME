CREATE TYPE "public"."product_report_reason" AS ENUM('wrong_product', 'wrong_numbers', 'missing_numbers', 'other');--> statement-breakpoint
CREATE TYPE "public"."product_report_status" AS ENUM('open', 'refetched', 'resolved');--> statement-breakpoint
CREATE TABLE "product_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"user_id" text NOT NULL,
	"reason" "product_report_reason" NOT NULL,
	"note" text,
	"snapshot" jsonb NOT NULL,
	"status" "product_report_status" DEFAULT 'open' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "source_id" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "recheck_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "flagged_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "product_reports" ADD CONSTRAINT "product_reports_code_products_code_fk" FOREIGN KEY ("code") REFERENCES "public"."products"("code") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_reports" ADD CONSTRAINT "product_reports_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "product_reports_user_id_code_idx" ON "product_reports" USING btree ("user_id","code");--> statement-breakpoint
CREATE INDEX "product_reports_code_idx" ON "product_reports" USING btree ("code");