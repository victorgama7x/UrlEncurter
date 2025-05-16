-- RedefineIndex
DROP INDEX "Url_originial_key";
CREATE UNIQUE INDEX "Url_original_key" ON "Url"("original");
