import { BetModel } from "../models/bet-model"
import fs from "fs/promises";

const filePath = "./src/data/bets.json";
const encoding = "utf-8"

const readBetsJson = async (): Promise<BetModel[]> => {
  const data = await fs.readFile(filePath, encoding);
  const bets: BetModel[] = JSON.parse(data);

  return bets;
}

const writeBetsJson = async(bets: BetModel[]) => {
  await fs.writeFile(filePath, JSON.stringify(bets, null, 2));
}

export const insertBet = async (bet: BetModel) => {
  const bets: BetModel[] = await readBetsJson();

  bets.push(bet);

  await writeBetsJson(bets);
}

export const findAllBets = async () => {
  const bets: BetModel[] = await readBetsJson();

  return bets;
}

export const findBetById = async (id: string) => {
  const bets: BetModel[] = await readBetsJson();

  const filteredBet =  bets.find(bet => bet.id === id);

  if(!filteredBet){
    return false;
  }

  return filteredBet;
}

export const findAndModifyBet = async (id: string, bet: BetModel) => {
  const bets: BetModel[] = await readBetsJson();

  const index = bets.findIndex(x => x.id === id);
  
  if(index === -1){
    return false;
  }

  bets[index] = {...bets[index], ...bet}

  await writeBetsJson(bets);

  return bets[index];
}

export const deleteOneBet = async (id: string) => {
  const bets: BetModel[] = await readBetsJson();

  const betToRemoveIndex = bets.findIndex(x => x.id === id);

  if(betToRemoveIndex === -1){
    return false;
  }

  bets.splice(betToRemoveIndex, 1);

  await writeBetsJson(bets);
  return true;
}