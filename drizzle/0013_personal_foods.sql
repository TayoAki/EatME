CREATE TABLE "personal_foods" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"keys" text[] NOT NULL,
	"food_id" integer,
	"product_code" text,
	"per100g" jsonb,
	"serving" jsonb,
	"usual_grams" double precision,
	"uses" integer DEFAULT 0 NOT NULL,
	"last_used_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "meal_items" ADD COLUMN "ai_name" text;--> statement-breakpoint
ALTER TABLE "meal_items" ADD COLUMN "personal_food_id" uuid;--> statement-breakpoint
ALTER TABLE "personal_foods" ADD CONSTRAINT "personal_foods_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personal_foods" ADD CONSTRAINT "personal_foods_food_id_foods_id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."foods"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "personal_foods_user_id_idx" ON "personal_foods" USING btree ("user_id");--> statement-breakpoint
ALTER TABLE "meal_items" ADD CONSTRAINT "meal_items_personal_food_id_personal_foods_id_fk" FOREIGN KEY ("personal_food_id") REFERENCES "public"."personal_foods"("id") ON DELETE set null ON UPDATE no action;