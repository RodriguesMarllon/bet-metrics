import * as betController from "../controllers/bet-controller";
import { FastifyInstance } from "fastify";
import { BetResult, BetStatus } from "@prisma/client";

const BetModelSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    stake: { type: "number" },
    odd: { type: "number" },
    status: { type: "string" },
    result: { type: "string" },
    potencialReturn: { type: "number" },
    profit: { type: "number" },
    loss: { type: "number" },
    settledAt: { type: "string" },
  },
};

const CreateBetModelSchema = {
  type: "object",
  required: ["stake", "odd"],
  properties: {
    stake: { type: "number" },
    odd: { type: "number" },
  },
};

const UpdateBetModelSchema = {
  type: "object",
  properties: {
    stake: { type: "number" },
    odd: { type: "number" },
    status: { type: "string", enum: Object.values(BetStatus) },
    result: { type: "string", enum: Object.values(BetResult) },
  },
};

interface Params {
  id: string;
}

export default async function betRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/bet",
    {
      schema: {
        body: CreateBetModelSchema,
        response: {
          201: {
            ...BetModelSchema,
            description: "Successful response containing the new bet.",
          },
          400: {
            type: "object",
            properties: { message: { type: "string" } },
            description:
              "The request could not be understood by the server due to malformed syntax or invalid data.",
          },
          500: {
            type: "object",
            properties: { message: { type: "string" } },
            description: "An Unexpected error ocurred on the server.",
          },
        },
        tags: ["Bet"],
        summary: "Create a new Bet",
      },
    },
    betController.postBet,
  );

  fastify.get(
    "/bet",
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            page: {
              type: "integer",
              default: 1,
              minimum: 1,
              description: "Page number",
            },
            limit: {
              type: "integer",
              default: 10,
              minimum: 1,
              maximum: 100,
              description: "Items per page",
            },
          },
        },
        response: {
          200: {
            type: "array",
            items: BetModelSchema,
            description: "Successful response containing the bet list.",
          },
          500: {
            type: "object",
            properties: { message: { type: "string" } },
            description: "An Unexpected error ocurred on the server.",
          },
        },
        tags: ["Bet"],
        summary: "List all Bets",
      },
    },
    betController.getBets,
  );

  fastify.get(
    "/bet/:id",
    {
      schema: {
        params: {
          type: "object",
          required: ["id"],
          properties: {
            id: {
              type: "string",
              format: "uuid",
              description: "Unique Bet ID",
            },
          },
        },
        response: {
          200: {
            ...BetModelSchema,
            description: "Successful response containing the bet details.",
          },
          404: {
            type: "object",
            properties: { message: { type: "string" } },
            description: "A bet with the specified ID was not found.",
          },
          500: {
            type: "object",
            properties: { message: { type: "string" } },
            description: "An unexpected error occurred on the server.",
          },
        },
        tags: ["Bet"],
        summary: "Find a Bet by ID",
      },
    },
    betController.getBetById,
  );

  fastify.put(
    "/bet/:id",
    {
      schema: {
        params: {
          type: "object",
          required: ["id"],
          properties: {
            id: {
              type: "string",
              format: "uuid",
              description: "Unique Bet ID",
            },
          },
        },
        body: UpdateBetModelSchema,
        response: {
          200: {
            ...BetModelSchema,
            description: "Successful response containing the updated bet.",
          },
        },
        tags: ["Bet"],
        summary: "Update a Bet by ID",
      },
    },
    betController.putBet,
  );

  fastify.delete<{ Params: Params }>(
    "/bet/:id",
    {
      schema: {
        tags: ["Bet"],
        summary: "Delete one Bet by ID",
        params: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
          },
          required: ["id"],
        },
        response: {
          204: { type: "null" },
          404: {
            type: "object",
            properties: {
              message: {
                type: "string",
              },
            },
          },
        },
      },
    },
    betController.deleteBet,
  );
}
