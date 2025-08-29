import * as betRepository from "../repositories/bet-repository";
import * as httpResponse from "../utils/http-helper";
import { BetModel } from "../models/bet-model";
import HttpResponse from "../models/http-response-model";

export const createBetService = async (bet: BetModel) => {
  if(!bet) {
    return await httpResponse.badRequest();
  } 

  await betRepository.insertBet(bet);
  return await httpResponse.created(bet);
}

export const getBetsService = async (): Promise<HttpResponse> => {
  const bets = await betRepository.findAllBets();

  if(!bets) {
    return await httpResponse.noContent();
  }

  return await httpResponse.ok(bets);
}

export const getBetById = async (id: string): Promise<HttpResponse> => {
  const bet = await betRepository.findBetById(id);

  if(!bet){
    return httpResponse.notFound(`Bet with ID ${id} not found.`);
  }

  return await httpResponse.ok(bet);
} 

export const putBet = async (id: string, bet: BetModel): Promise<HttpResponse> => {
  if(!bet){
    return await httpResponse.badRequest();
  }

  const response = await betRepository.findAndModifyBet(id, bet);

  if(!response){
    return httpResponse.notFound(`Bet with ID ${id} not found.`);
  }

  return await httpResponse.ok(response);
}

export const deleteBet = async (id: string): Promise<HttpResponse> => {
  const response = await betRepository.deleteOneBet(id);

  if(!response){
    return httpResponse.notFound(`Bet with ID ${id} not found.`);
  }

  return await httpResponse.ok("Bet removed succesfully");
}