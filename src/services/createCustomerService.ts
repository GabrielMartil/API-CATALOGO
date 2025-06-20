import prismaClient from "../prisma";

interface CreateCustomerProps {
  name_loja: string;
  whatsapp_num: string;
  instagram_name: string;
  whatsapp_status: "on" | "off";
  instagram_status: "on" | "off";
}

class CreateCustomerService {
  async execute({
    name_loja,
    whatsapp_num,
    instagram_name,
    whatsapp_status,
    instagram_status,
  }: CreateCustomerProps) {
    if (!name_loja || !whatsapp_num) {
      throw new Error("Preencha os campos Nome e Valor");
    }

    const configuracao = await prismaClient.configuracao.create({
      data: {
        name_loja,
        whatsapp_num,
        instagram_name,
        whatsapp_status,
        instagram_status,
        link_catalogo: "",
        link_whatsapp: "",
      },
    });

    return configuracao;
  }
}

export { CreateCustomerService };
