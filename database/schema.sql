set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"createdAt" TIMESTAMP NOT NULL default now(),
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."products" (
	"productId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"category" TEXT NOT NULL,
	"price" DECIMAL NOT NULL,
	"description" TEXT NOT NULL,
	"imageUrl" TEXT NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."carts" (
	"cartId" serial NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "carts_pk" PRIMARY KEY ("cartId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."cartedItems" (
	"cartedItemId" serial NOT NULL,
	"cartId" integer NOT NULL,
	"productId" integer NOT NULL,
	"quantity" integer NOT NULL,
  "size" TEXT NOT NULL,
	CONSTRAINT "cartedItems_pk" PRIMARY KEY ("cartedItemId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "carts" ADD CONSTRAINT "carts_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "cartedItems" ADD CONSTRAINT "cartedItems_fk0" FOREIGN KEY ("cartId") REFERENCES "carts"("cartId");
ALTER TABLE "cartedItems" ADD CONSTRAINT "cartedItems_fk1" FOREIGN KEY ("productId") REFERENCES "products"("productId");
