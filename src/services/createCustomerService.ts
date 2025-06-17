import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string,
  valor: string,
  categoria: string,
  duracao: string
}

class CraeteCustomerService {
  async execute({ name, valor, categoria, duracao }: CreateCustomerProps) {

    if (!name || !valor) {
      throw new Error("Preencha os campos Nome e Valor")
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        valor,
        categoria,
        duracao
      }
    })

    return customer;
  }
}

export { CraeteCustomerService };
