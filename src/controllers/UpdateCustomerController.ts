import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string;
  name_loja?: string;
  whatsapp_num?: string;
  instagram_name?: string;
  whatsapp_status?: "on" | "off";
  instagram_status?: "on" | "off";
}

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const {name_loja, whatsapp_num, instagram_name, whatsapp_status, instagram_status } = request.body as UpdateCustomerProps;

      const configuracaoAtualizada = await prismaClient.configuracao.update({
        where: { id:"685201e7316beafa7086bed9" },
        data: {
          ...(name_loja && { name_loja }),
          ...(whatsapp_num && { whatsapp_num }),
          ...(instagram_name && { instagram_name }),
          ...(whatsapp_status && { whatsapp_status }),
          ...(instagram_status && { instagram_status }),
        }
      });

      return reply.status(200).send(configuracaoAtualizada);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: 'Erro ao atualizar configuração' });
    }
  }
}

export { UpdateCustomerController };
