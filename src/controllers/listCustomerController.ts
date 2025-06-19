import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/listCustomerService";

class LisCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listCustomerService = new ListCustomerService();

    const Configuracao = await listCustomerService.execute();

    reply.send(Configuracao);
  }

}
export { LisCustomersController }