import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "recipes_ingredients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"quantity" varchar
  );
  
  CREATE TABLE "recipes_instructions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"step" numeric NOT NULL
  );
  
  CREATE TABLE "recipes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"description" varchar,
  	"prep_time" numeric,
  	"cook_time" numeric,
  	"notes" jsonb,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "recipes_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer
  );
  
  CREATE TABLE "tags" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "recipes_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "recipes_ingredients" ADD CONSTRAINT "recipes_ingredients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."recipes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "recipes_instructions" ADD CONSTRAINT "recipes_instructions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."recipes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "recipes_rels" ADD CONSTRAINT "recipes_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."recipes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "recipes_rels" ADD CONSTRAINT "recipes_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "recipes_ingredients_order_idx" ON "recipes_ingredients" USING btree ("_order");
  CREATE INDEX "recipes_ingredients_parent_id_idx" ON "recipes_ingredients" USING btree ("_parent_id");
  CREATE INDEX "recipes_instructions_order_idx" ON "recipes_instructions" USING btree ("_order");
  CREATE INDEX "recipes_instructions_parent_id_idx" ON "recipes_instructions" USING btree ("_parent_id");
  CREATE INDEX "recipes_slug_idx" ON "recipes" USING btree ("slug");
  CREATE INDEX "recipes_updated_at_idx" ON "recipes" USING btree ("updated_at");
  CREATE INDEX "recipes_rels_order_idx" ON "recipes_rels" USING btree ("order");
  CREATE INDEX "recipes_rels_parent_idx" ON "recipes_rels" USING btree ("parent_id");
  CREATE INDEX "recipes_rels_path_idx" ON "recipes_rels" USING btree ("path");
  CREATE INDEX "recipes_rels_tags_id_idx" ON "recipes_rels" USING btree ("tags_id");
  CREATE UNIQUE INDEX "tags_name_idx" ON "tags" USING btree ("name");
  CREATE INDEX "tags_slug_idx" ON "tags" USING btree ("slug");
  CREATE INDEX "tags_updated_at_idx" ON "tags" USING btree ("updated_at");
  CREATE INDEX "tags_created_at_idx" ON "tags" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_recipes_fk" FOREIGN KEY ("recipes_id") REFERENCES "public"."recipes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_recipes_id_idx" ON "payload_locked_documents_rels" USING btree ("recipes_id");
  CREATE INDEX "payload_locked_documents_rels_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("tags_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "recipes_ingredients" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "recipes_instructions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "recipes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "recipes_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tags" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "recipes_ingredients" CASCADE;
  DROP TABLE "recipes_instructions" CASCADE;
  DROP TABLE "recipes" CASCADE;
  DROP TABLE "recipes_rels" CASCADE;
  DROP TABLE "tags" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_recipes_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tags_fk";
  
  DROP INDEX "payload_locked_documents_rels_recipes_id_idx";
  DROP INDEX "payload_locked_documents_rels_tags_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "recipes_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "tags_id";`)
}
