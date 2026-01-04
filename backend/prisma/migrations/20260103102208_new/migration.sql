-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "author" TEXT NOT NULL,
    "publisher" TEXT,
    "language" TEXT DEFAULT 'Indonesia',
    "year_publish" BIGINT,
    "total_page" BIGINT,
    "url_page" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
