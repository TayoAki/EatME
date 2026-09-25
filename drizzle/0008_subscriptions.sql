CREATE TABLE "subscriptions" (
	"user_id" text PRIMARY KEY NOT NULL,
	"active" boolean DEFAULT false NOT NULL,
	"expires_at" timestamp with time zone,
	"will_renew" boolean DEFAULT false NOT NULL,
	"product_id" text,
	"store" text,
	"last_event_id" text,
	"last_event_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;