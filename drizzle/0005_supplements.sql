CREATE TYPE "public"."supplement_schedule" AS ENUM('daily', 'as_needed');--> statement-breakpoint
CREATE TABLE "supplement_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"supplement_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"date" date NOT NULL,
	"nutrients" jsonb NOT NULL,
	"taken_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "supplements" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"nutrients" jsonb NOT NULL,
	"schedule" "supplement_schedule" DEFAULT 'daily' NOT NULL,
	"archived_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "supplement_logs" ADD CONSTRAINT "supplement_logs_supplement_id_supplements_id_fk" FOREIGN KEY ("supplement_id") REFERENCES "public"."supplements"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "supplement_logs" ADD CONSTRAINT "supplement_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "supplements" ADD CONSTRAINT "supplements_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "supplement_logs_supplement_date_idx" ON "supplement_logs" USING btree ("supplement_id","date");--> statement-breakpoint
CREATE INDEX "supplement_logs_user_id_date_idx" ON "supplement_logs" USING btree ("user_id","date");--> statement-breakpoint
CREATE INDEX "supplements_user_id_idx" ON "supplements" USING btree ("user_id");