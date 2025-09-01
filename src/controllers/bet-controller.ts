import * as betService from "../services/bet-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { BetModel } from "../models/bet-model";

interface Params{
  id: string;
}

export const postBet = async (request: FastifyRequest< { Body: BetModel}>, reply: FastifyReply) => {
  const httpResponse = await betService.createBetService(request.body);

  return reply.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getBet = async (request: FastifyRequest, reply: FastifyReply) => {
  const httpResponse = await betService.getBetsService();

  reply.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getBetById = async (request: FastifyRequest<{ Params: Params}>, reply: FastifyReply) => {
  const { id } = request.params;
  
  const httpResponse = await betService.getBetById(id);

  reply.status(httpResponse.statusCode).send(httpResponse.body);
}

export const putBet = async (request: FastifyRequest<{ Params: Params, Body: BetModel}>, reply: FastifyReply) => {
  const { id } = request.params;

  const httpResponse = await betService.putBet(id, request.body);

  reply.status(httpResponse.statusCode).send(httpResponse.body);
}

export const deleteBet = async (request: FastifyRequest<{ Params: Params, Body: BetModel }>, reply: FastifyReply) => {
  const { id } = request.params;

  const httpResponse = await betService.deleteBet(id);

  reply.status(httpResponse.statusCode).send(httpResponse.body);
}