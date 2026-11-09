CREATE TABLE "food_prices" (
	"food_id" integer PRIMARY KEY NOT NULL,
	"cents_per100g" double precision NOT NULL,
	"basis" text NOT NULL,
	"version" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "food_prices" ADD CONSTRAINT "food_prices_food_id_foods_id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."foods"("id") ON DELETE cascade ON UPDATE no action;