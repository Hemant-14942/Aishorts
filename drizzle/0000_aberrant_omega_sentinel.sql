CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"imageUrl" varchar(100),
	"subscription" varchar(100) DEFAULT 'free'
);
