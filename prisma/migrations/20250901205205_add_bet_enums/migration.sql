/*
  Warnings:

  - The `status` column on the `Bets` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `result` column on the `Bets` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."BetStatus" AS ENUM ('OPEN', 'SETTLED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."BetResult" AS ENUM ('WON', 'LOST', 'VOID');

-- AlterTable
ALTER TABLE "public"."Bets" DROP COLUMN "status",
ADD COLUMN     "status" "public"."BetStatus" NOT NULL DEFAULT 'OPEN',
DROP COLUMN "result",
ADD COLUMN     "result" "public"."BetResult";
