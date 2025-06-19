import prismaClient from "../prisma";

class ListCustomerService{
  async execute(){
    const configuracao = await prismaClient.configuracao.findMany()
    return configuracao;
  }
}

export { ListCustomerService }