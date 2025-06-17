import fastify from "fastify";
import cors from '@fastify/cors';
import fastifyMultipart from 'fastify-multipart'; // Adicionar importação
import { routes } from "./routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

const start = async () => {
    await app.register(cors);
    await app.register(fastifyMultipart); // Registrar o plugin para lidar com multipart
    await app.register(routes);

    try {
        await app.listen({ port: 3333 });
    } catch (err) {
        process.exit(1);
    }
}

start();
