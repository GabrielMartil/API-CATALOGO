import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest, FastifyReply
} from "fastify";

import { CreateCustomerController } from "./controllers/createCustomerController";
import { LisCustomersController } from "./controllers/listCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { CreateProdutosController } from "./controllers/createProdutosController";
import { LisProdutosController } from "./controllers/listaprodutosController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/configuracao", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.put("/configuracao", async (request, reply) => {
        return new UpdateCustomerController().handle(request, reply);
    });

    fastify.get("/configuracaos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new LisCustomersController().handle(request, reply)
    })

    fastify.delete("/produtodelete/:id", async (request, reply) => {
        return new DeleteCustomerController().handle(request, reply);
    });

    fastify.post("/produto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProdutosController().handle(request, reply)
    })

    fastify.get("/produtos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new LisProdutosController().handle(request, reply)
    })

}

