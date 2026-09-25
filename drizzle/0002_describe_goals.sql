ALTER TABLE "meals" ADD COLUMN "note" text;--> statement-breakpoint
ALTER TABLE "meals" ADD COLUMN "serving_size" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "plan_targets" jsonb;