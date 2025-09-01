import * as betController from '../controllers/bet-controller';
import { FastifyInstance } from 'fastify';
import { BetModel } from '../models/bet-model';

const BetModelSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    stake: { type: 'number' },
    odd: { type: 'number' },
    status: { type: 'string' },
    result: { type: 'string' },
    potencialReturn: { type: 'number' },
    profit: { type: 'number' },
    loss: { type: 'number' },
    settledAt: { type: 'string' },
  },
};

interface Params {
  id: string;
}

export default async function betRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: BetModel }>(
    '/bet',
    {
      schema: {
        body: BetModelSchema,
        tags: ['Bet'],
        summary: 'Create a Bet',
      },
    },
    (req, reply) => {
      betController.postBet(req, reply);
    }
  );

  fastify.get(
    '/bet',
    {
      schema: {
        tags: ['Bet'],
        summary: 'List all Bets',
      },
    },
    (req, reply) => {
      betController.getBet(req, reply);
    }
  );

  fastify.get<{ Params: Params }>(
    '/bet/:id',
    {
      schema: {
        tags: ['Bet'],
        summary: 'Find a Bet by ID',
      },
    },
    (req, reply) => {
      betController.getBetById(req, reply);
    }
  );

  fastify.put<{ Params: Params; Body: BetModel }>(
    '/bet/:id',
    {
      schema: {
        tags: ['Bet'],
        summary: 'Update a Bet by ID',
        body: BetModelSchema,
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
      },
    },
    (req, reply) => {
      betController.putBet(req, reply);
    }
  );

  fastify.delete<{ Params: Params }>(
    '/bet/:id',
    {
      schema: {
        tags: ['Bet'],
        summary: 'Delete one Bet by ID',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
      },
    },
    (req, reply) => {
      betController.deleteBet(req, reply);
    }
  );
}
