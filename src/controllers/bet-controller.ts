import { Request, Response } from "express";
import * as betService from "../services/bet-service";

export const postBet = async (req: Request, res: Response) => {
  const httpResponse = await betService.createBetService(req.body);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getBet = async (req: Request, res: Response) => {
  const httpResponse = await betService.getBetsService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getBetById = async (req: Request, res: Response) => {
  const httpResponse = await betService.getBetById(req.params.id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const putBet = async (req: Request, res: Response) => {
  const httpResponse = await betService.putBet(req.params.id, req.body);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deleteBet = async (req: Request, res: Response) => {
  const httpResponse = await betService.deleteBet(req.params.id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}