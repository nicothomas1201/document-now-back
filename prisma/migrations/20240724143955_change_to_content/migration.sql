/*
  Warnings:

  - You are about to drop the column `file_path` on the `Documentation` table. All the data in the column will be lost.
  - Added the required column `content` to the `Documentation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documentation" DROP COLUMN "file_path",
ADD COLUMN     "content" TEXT NOT NULL;
