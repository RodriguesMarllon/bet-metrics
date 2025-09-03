-- CreateTable
CREATE TABLE "public"."Bets" (
    "id" TEXT NOT NULL,
    "stake" DECIMAL(65,30) NOT NULL,
    "odd" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "result" TEXT,
    "potencialReturn" DECIMAL(65,30) NOT NULL,
    "profit" DECIMAL(65,30),
    "loss" DECIMAL(65,30),
    "settledAt" TIMESTAMP(3),

    CONSTRAINT "Bets_pkey" PRIMARY KEY ("id")
);
