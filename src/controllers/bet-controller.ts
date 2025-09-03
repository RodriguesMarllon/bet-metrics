import * as betService from "../services/bet-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { BetModel } from "../models/bet-model";
import { BetCreate } from "../interfaces/bet.interface";

interface Params {
  id: string;
}

export const postBet = async (
  request: FastifyRequest<{ Body: BetCreate }>,
  reply: FastifyReply,
): Promise<FastifyReply> => {
  const newBet = await betService.createBetService(request.body);

  return reply.code(201).send(newBet);
};

export const getBets = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<FastifyReply> => {
  const bets = await betService.getBetsService();

  return reply.code(200).send(bets);
};

export const getBetById = async (
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply,
): Promise<FastifyReply> => {
  const { id } = request.params;

  const bet = await betService.getBetById(id);

  return reply.code(200).send(bet);
};

export const putBet = async (
  request: FastifyRequest<{ Params: Params; Body: BetModel }>,
  reply: FastifyReply,
): Promise<FastifyReply> => {
  const { id } = request.params;

  const bet = await betService.putBet(id, request.body);

  return reply.code(200).send(bet);
};

export const deleteBet = async (
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply,
): Promise<FastifyReply> => {
  const { id } = request.params;

  const bet = await betService.deleteBet(id);

  return reply.code(200).send(bet);
};
