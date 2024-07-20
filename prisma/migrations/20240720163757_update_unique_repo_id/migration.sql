/*
  Warnings:

  - A unique constraint covering the columns `[repoId]` on the table `Documentation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Documentation_repoId_key" ON "Documentation"("repoId");
