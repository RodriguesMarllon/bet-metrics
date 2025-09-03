import { BetStatus } from "@prisma/client";

export interface BetCreate {
  stake: number;
  odd: number;
}