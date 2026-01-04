-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'Indonesia',
    "year_publish" BIGINT NOT NULL,
    "total_page" BIGINT NOT NULL,
    "url_page" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "deleted_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

