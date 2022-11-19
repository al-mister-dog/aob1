/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bio` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "bio" STRING NOT NULL;
ALTER TABLE "Profile" ADD COLUMN     "tag" STRING NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
