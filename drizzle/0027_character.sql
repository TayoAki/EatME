CREATE TABLE "character_days" (
	"user_id" text NOT NULL,
	"date" date NOT NULL,
	"showed_up" boolean DEFAULT false NOT NULL,
	"protein" boolean DEFAULT false NOT NULL,
	"water" boolean DEFAULT false NOT NULL,
	"fiber" boolean DEFAULT false NOT NULL,
	CONSTRAINT "character_days_user_id_date_pk" PRIMARY KEY("user_id","date")
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "character" jsonb;--> statement-breakpoint
ALTER TABLE "character_days" ADD CONSTRAINT "character_days_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;