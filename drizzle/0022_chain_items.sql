CREATE TYPE "public"."chain_item_kind" AS ENUM('main', 'side', 'drink', 'extra', 'dessert');--> statement-breakpoint
CREATE TYPE "public"."chain_item_status" AS ENUM('live', 'retired');--> statement-breakpoint
CREATE TABLE "chain_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"chain_slug" text NOT NULL,
	"chain" text NOT NULL,
	"section" text NOT NULL,
	"name" text NOT NULL,
	"serving" text NOT NULL,
	"serving_grams" double precision,
	"kind" "chain_item_kind" NOT NULL,
	"calories" integer NOT NULL,
	"nutrients" jsonb NOT NULL,
	"trans_fat_g" double precision NOT NULL,
	"source_url" text NOT NULL,
	"checked_on" date NOT NULL,
	"status" "chain_item_status" DEFAULT 'live' NOT NULL,
	"version" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "chain_items_chain_slug_name_serving_idx" ON "chain_items" USING btree ("chain_slug","name","serving");--> statement-breakpoint
CREATE INDEX "chain_items_name_search_idx" ON "chain_items" USING gin (to_tsvector('english', "name"));