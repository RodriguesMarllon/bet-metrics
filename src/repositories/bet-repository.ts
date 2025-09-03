import { BetModel } from "../models/bet-model";
import { prisma } from "../database/prisma-client";
import { BetStatus, Bets as Bet } from "@prisma/client";

export interface CreateBetDTO {
  stake: number;
  odd: number;
  status: BetStatus;
  potencialReturn: number;
}

export const insertBet = async (bet: CreateBetDTO): Promise<Bet> => {
  return await prisma.bets.create({ data: bet });
};

export const findAllBets = async (): Promise<Bet[]> => {
  return await prisma.bets.findMany();
};

export const findBetById = async (id: string): Promise<Bet> => {
  return await prisma.bets.findUniqueOrThrow({ where: { id: id } });
};

export const findAndModifyBet = async (
  id: string,
  betInput: Partial<BetModel>,
) => {
  const { id: _, ...updateData } = betInput;

  return await prisma.bets.update({
    where: { id: id },
    data: updateData,
  });
};

export const deleteOneBet = async (id: string) => {
  const bet = await prisma.bets.delete({ where: { id } });

  return bet;
};
