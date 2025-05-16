-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "original" TEXT NOT NULL,
    "short" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_originial_key" ON "Url"("original");

-- CreateIndex
CREATE UNIQUE INDEX "Url_short_key" ON "Url"("short");
