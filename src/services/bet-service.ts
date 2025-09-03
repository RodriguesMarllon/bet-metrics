import * as betRepository from "../repositories/bet-repository";
import * as httpResponse from "../utils/http-helper";
import { BetModel } from "../models/bet-model";
import HttpResponse from "../models/http-response-model";
import { BetCreate } from "../interfaces/bet.interface";
import * as Prisma from "@prisma/client";
import { Bets as Bet } from "@prisma/client";

export const createBetService = async (data: BetCreate): Promise<Bet> => {
  const betToCreate = {
    ...data,
    status: Prisma.BetStatus.OPEN,
    potencialReturn: data.stake * data.odd,
  };

  return await betRepository.insertBet(betToCreate);
};

export const getBetsService = async (): Promise<Bet[]> => {
  return await betRepository.findAllBets();
};

export const getBetById = async (id: string): Promise<Bet> => {
  return await betRepository.findBetById(id);
};

export const putBet = async (id: string, bet: BetModel): Promise<Bet> => {
  return await betRepository.findAndModifyBet(id, bet);
};

export const deleteBet = async (id: string): Promise<Bet> => {
  return await betRepository.deleteOneBet(id);
};
