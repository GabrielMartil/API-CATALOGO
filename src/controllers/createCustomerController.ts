import { FastifyRequest, FastifyReply } from "fastify";
import { CraeteCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
      const { name, valor, categoria, duracao } = request.body as { name: string, valor: string, categoria: string, duracao: string}
      
      console.log(name);
      console.log(valor);
      console.log(categoria)
      console.log(duracao)
      
      const customerService = new CraeteCustomerService();
      const customer = await customerService.execute({ name, valor, categoria, duracao});
      
      reply.send(customer)
    }
  }

export { CreateCustomerController };