ALTER TABLE "users" ADD COLUMN "ai_consent_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "ai_consent_providers" text[];