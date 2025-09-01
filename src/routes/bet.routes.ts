import * as betController from "../controllers/bet-controller";
import { FastifyInstance } from "fastify";

export default function betRoutes(fastify: FastifyInstance){
  fastify.post("/bet", betController.postBet);
  fastify.get("/bet", betController.getBet);
  fastify.get("/bet/:id", betController.getBetById);
  fastify.put("/bet/:id", betController.putBet);
  fastify.delete("/bet/:id", betController.deleteBet);
}