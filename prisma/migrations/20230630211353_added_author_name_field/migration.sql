/*
  Warnings:

  - Added the required column `name` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "name" TEXT NOT NULL;
