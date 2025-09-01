import Fastify, { FastifyInstance } from "fastify";  
import cors from "@fastify/cors";
import appRoutes from "./routes/bet.routes";

export default function createApp(): FastifyInstance {
  const fastify: FastifyInstance = Fastify()

  fastify.register(cors, {origin: "*"});
  fastify.register(appRoutes, {prefix: "/api"});

  return fastify
}