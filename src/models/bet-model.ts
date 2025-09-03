import { BetResult, BetStatus } from "@prisma/client";

export interface BetModel{
  id: string;
  stake: number;
  odd: number;
  status: BetStatus;
  result: BetResult;
  potencialReturn: number;
  profit: number;
  loss: number;
  settledAt: string;
}