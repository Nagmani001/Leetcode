/*
  Warnings:

  - The primary key for the `Problems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `examples` on the `Problems` table. All the data in the column will be lost.
  - Added the required column `tag` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable
ALTER TABLE "Problems" DROP CONSTRAINT "Problems_pkey",
DROP COLUMN "examples",
ADD COLUMN     "tag" "Tag" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Problems_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Problems_id_seq";

-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "explanation" TEXT,
    "problemId" INTEGER NOT NULL,
    "problemsId" TEXT,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constraints" (
    "id" TEXT NOT NULL,
    "value" TEXT,
    "problemsId" TEXT,

    CONSTRAINT "Constraints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_problemsId_fkey" FOREIGN KEY ("problemsId") REFERENCES "Problems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Constraints" ADD CONSTRAINT "Constraints_problemsId_fkey" FOREIGN KEY ("problemsId") REFERENCES "Problems"("id") ON DELETE SET NULL ON UPDATE CASCADE;
