/*
  Warnings:

  - You are about to drop the column `content` on the `Documentation` table. All the data in the column will be lost.
  - Added the required column `file_path` to the `Documentation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documentation" DROP COLUMN "content",
ADD COLUMN     "file_path" TEXT NOT NULL;
