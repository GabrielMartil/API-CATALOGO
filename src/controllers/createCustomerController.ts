import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name_loja, whatsapp_num, instagram_name, whatsapp_status, instagram_status } = request.body as {
      name_loja: string, whatsapp_num: string, instagram_name: string, whatsapp_status: "on" | "off";
      instagram_status: "on" | "off";
    }

    console.log(name_loja);
    console.log(whatsapp_num);
    console.log(instagram_name);
    console.log(whatsapp_status);
    console.log(instagram_status)

    const customerService = new CreateCustomerService();
    const Configuracao = await customerService.execute({ name_loja, whatsapp_num, instagram_name, whatsapp_status, instagram_status });

    reply.send(Configuracao)
  }
}

export { CreateCustomerController };