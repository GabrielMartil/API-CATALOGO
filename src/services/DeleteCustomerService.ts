import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerService{
  async execute({id}: DeleteCustomerProps){

    if(!id){
        throw new Error("Solicitação invalida")
    }

    const findcustomer = await prismaClient.produtos.findFirst({
        where:{
            id:id
        }
    })
    
    if(!findcustomer){
        throw new Error("Cliente nao existe! ")
    }

    await prismaClient.produtos.delete({
        where:{
            id: findcustomer.id
        }
    })
    return { message: "Deletado com sucesso!" }
  }
}

export { DeleteCustomerService }