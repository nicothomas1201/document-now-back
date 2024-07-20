/*
  Warnings:

  - You are about to drop the column `repoId` on the `Documentation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[repoName]` on the table `Documentation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `repoName` to the `Documentation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Documentation_repoId_key";

-- AlterTable
ALTER TABLE "Documentation" DROP COLUMN "repoId",
ADD COLUMN     "repoName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Documentation_repoName_key" ON "Documentation"("repoName");
