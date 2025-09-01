import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import appRoutes from './routes/bet.routes';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

export default function createApp(): FastifyInstance {
  const app: FastifyInstance = Fastify();

  const swaggerOptions = {
    openapi: {
      info: {
        title: 'Bet Metrics',
        description: 'API to manage Bets',
        version: '1.0.0',
      },
    },
  };

  const swaggerUiOptions = {
    routePrefix: '/docs',
    exposeRoute: true,
  };

  app.register(fastifySwagger, swaggerOptions);
  app.register(fastifySwaggerUi, swaggerUiOptions);

  app.register(cors, { origin: '*' });
  app.register(appRoutes, { prefix: '/api' });

  return app;
}
