import prismaClient from "../prisma";

class ListProdutosService{
  async execute(){
    const Produtos = await prismaClient.produtos.findMany()
    return Produtos;
  }
}

export { ListProdutosService }