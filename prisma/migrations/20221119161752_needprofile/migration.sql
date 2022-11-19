/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "email" STRING NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" STRING;
ALTER TABLE "User" ADD COLUMN     "title" STRING;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
