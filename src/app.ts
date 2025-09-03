import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import appRoutes from "./routes/bet.routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { Prisma } from "@prisma/client";

export default function createApp(): FastifyInstance {
  const app: FastifyInstance = Fastify();

  const swaggerOptions = {
    openapi: {
      info: {
        title: "Bet Metrics",
        description: "API to manage Bets",
        version: "1.0.0",
      },
    },
  };

  const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
  };

  app.register(fastifySwagger, swaggerOptions);
  app.register(fastifySwaggerUi, swaggerUiOptions);

  app.register(cors, { origin: "*" });
  app.register(appRoutes, { prefix: "/api" });

  app.setErrorHandler((error, request, reply) => {
    if (error.statusCode) {
      return reply.status(error.statusCode).send({
        message: error.message,
      });
    }

    if (error.validation) {
      return reply.status(400).send({
        message: "Invalid input data.",
        errors: error.validation,
      });
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return reply.status(404).send({
        message: "The record with the specified ID was not found.",
      });
    }

    request.log.error(error);
    reply.status(500).send({ message: "Internal server error." });
  });

  return app;
}
