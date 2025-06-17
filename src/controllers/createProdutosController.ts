import { FastifyRequest, FastifyReply } from "fastify";
import { CraeteProdutosService } from "../services/createProdutosService";

class CreateProdutosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { image, name, valor, memoria, bateria, categoria, condicao, descricao } = request.body as {

      image: string;
      name: string;
      valor: string;
      memoria: string;
      bateria: string;
      categoria: string;
      condicao: string;
      descricao: string;

    }

    console.log(image);
    console.log(name);
    console.log(valor)
    console.log(memoria)
    console.log(bateria);
    console.log(categoria);
    console.log(condicao);
    console.log(descricao)


    const ProdutosService = new CraeteProdutosService();
    const Produtos = await ProdutosService.execute({ image, name, valor, memoria, bateria, categoria, condicao, descricao });

    reply.send(Produtos)
  }
}

export { CreateProdutosController };