import fastify from "fastify";
import cors from '@fastify/cors';
import fastifyMultipart from 'fastify-multipart';
import { routes } from "./routes";

const app = fastify({ logger: true });

// Tratamento global de erros
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  try {
    // Registra os plugins
    await app.register(cors);
    await app.register(fastifyMultipart);
    await app.register(routes);

    const port = process.env.PORT ? Number(process.env.PORT) : 3333;

    await app.listen({
      port,
      host: '0.0.0.0'
    });

    console.log(`Server listening on port ${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
