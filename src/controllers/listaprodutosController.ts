import { FastifyRequest, FastifyReply } from "fastify";
import { ListProdutosService } from "../services/listaprodutosService";


class LisProdutosController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listProdutosService = new ListProdutosService();

    const Produtos = await listProdutosService.execute();

    reply.send(Produtos);
  }

}
export { LisProdutosController }