import prismaClient from "../prisma";

interface CreateProdutosProps {
  image: string;
  name: string;
  valor: string;
  memoria: string;
  bateria: string;
  categoria: string;
  condicao: string;
  descricao: string;
}

class CraeteProdutosService {
  async execute({ image, name, valor, memoria, bateria, categoria, condicao, descricao }: CreateProdutosProps) {

    if (!name || !valor || !memoria ) {
      throw new Error("Preencha os campos Nome, Valor e Memoria")
    }

    if (!image.startsWith("data:image")) {
      image = `data:image/jpeg;base64,${image}`;
    }

    if (condicao === "Seminovos" && (!bateria || bateria.trim() === "")) {
      throw new Error("Para produtos Seminovos, a % da bateria deve ser informada.");
    }

    const Produtos = await prismaClient.produtos.create({
      data: {
        image,
        name,
        valor,
        memoria,
        bateria,
        categoria,
        condicao,
        descricao,
      },
    });

    return Produtos;
  }
}

export { CraeteProdutosService };
