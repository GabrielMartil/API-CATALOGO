import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";
import { Status } from "@prisma/client";

interface UpdateCustomerProps {
  id: string;
  name_loja?: string;
  whatsapp_num?: string;
  instagram_name?: string;
  whatsapp_status?: Status;
  instagram_status?: Status;
}

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const {
        id,
        name_loja,
        whatsapp_num,
        instagram_name,
        whatsapp_status,
        instagram_status
      } = request.body as UpdateCustomerProps;

      if (!id) {
        return reply.status(400).send({ error: "ID é obrigatório para atualização." });
      }

      const configuracaoAtualizada = await prismaClient.configuracao.update({
        where: { id: "6854a45b7bf195e6a4d31726" },
        data: {
          ...(name_loja && { name_loja }),
          ...(whatsapp_num && { whatsapp_num }),
          ...(instagram_name && { instagram_name }),
          ...(whatsapp_status && { whatsapp_status }),
          ...(instagram_status && { instagram_status }),
        },
      });

      return reply.status(200).send(configuracaoAtualizada);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "Erro ao atualizar configuração" });
    }
  }
}

export { UpdateCustomerController };
