import { Objeto } from "./Basicas.js";
import { validate } from "bycontract"

// ----------------------------------------------------
export class ProfessorDesacordado extends Objeto {
  constructor() {
    super(
      "professor",
      "O professor parece preso em um sono profundo",
      "O professor despertou. Ainda confuso, mas ficará bem. Você se saiu muito bem, jovem aprendiz!"
    );
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(
          `O professor se mantém completamente imóvel em um sono pesado como um rio profundo.
          Mas ele ainda está vivo, e precisando de ajuda. Procure pelos ingredientes para curá-lo`
        );
        break;
      case "aplicar":
        this.acaoOk = true;
        console.log(this.descricao)
        return "FIM"
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
// ITEM
export class GarrafaEmpoeirada extends Objeto {
  constructor() {
    super(
      "garrafa_empoeirada",
      "Uma velha garrafa, ainda cheia com algum tipo de bebida",
      "Ah sim, a boa e velha cachaça braba!"
    );
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        this.acaoOk = true;
        console.log(this.descricao);
        return new CachacaBraba()
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}
// SUB-ITEM (é o produto do item mais ação)
export class CachacaBraba extends Objeto {
  constructor() {
    super(
      "cachaca_braba",
      "",
      "Um exemplar da boa e velha cachaça braba. Um excelente anestésico e solvente para poções"
    );
    this.acaoOk = true
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) ${this.nome}`)
    }
  }
}

// ----------------------------------------------------
export class RaboDeDraco extends Objeto {
  constructor() {
    super(
      "rabo_de_draco",
      "Um pesado rabo de um draco jovem",
      "Um pesado rabo de um draco jovem, mas parece que a ponta foi removida..."
    );
  }

  usar(acao) {
    validate(acao, "String");

    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      case "cortar":
        if (!this.acaoOk) {
          console.log(
            "Com um pouco de dificuldade você remove "
            + "a seta presente na ponta da peça de carne"
          );
          this.acaoOk = true
          return new PontaDeRaboDeDraco()
        }
        console.log("Sua faca não parece ser capaz de cortar a seção mais espessa da cauda ...")
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

export class PontaDeRaboDeDraco extends Objeto {
  constructor() {
    super(
      "ponta_de_rabo_de_draco",
      "",
      "Um pedaço de carne em formato de seta, coberto por escamas verdes e gosmentas"
    );
    this.acaoOk = true
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
export class PilhaDePoeiraRosada extends Objeto {
  constructor() {
    super(
      "pilha_de_poeira_rosada",
      "Um pequeno monte de cristais rosados extremamente finos",
      "Um amontoado de sal rosa. Muito saboroso e nutritivo ..."
    );
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        this.acaoOk = true;
        console.log(this.descricao);
        return new SalRosaDosMontesNevados()
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
export class SalRosaDosMontesNevados extends Objeto {
  constructor() {
    super(
      "sal_rosa_dos_montes_nevados",
      "",
      "Ah o sal rosa, uma especiaria sem igual. Muito saboroso e nutritivo"
    );
    this.acaoOk = true;
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
export class ChaveDeOuro extends Objeto {
  constructor() {
    super(
      "chave_de_ouro",
      "",
      "Uma grande chave dourada. Exala uma aura mágica, o que será que ela abre?"
    );
    this.acaoOk = true
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

export class VasoDePlantas extends Objeto {
  constructor() {
    super(
      "vaso_de_plantas",
      "Um vaso adornado, a planta em seu interior tem grandes folhas verdes, seus frutos são pequenas bolinhas espinhosas",
      "Essa planta ja te forneceu todos os seus presentes, é melhor deixá-la em paz ..."
    );
  }

  usar(acao) {
    validate(acao, "String");
    if (this.acaoOk) {
      console.log(this.descricao)
      return
    }
    switch (acao) {
      case "investigar":
        console.log(
          "Ao olhar mais de perto você ve que esse é um exemplar de "
          + "Ricinus Communis, usado na produção do óleo de Ricino, útil em poções de cura ..."
        );
        break;
      case "espremer":
        console.log(
          "Você separa cuidadosamente os frutos e os coloca na prensa. "
          + "Com uma leve pressão do punho e voi lá óleo de Ricino."
        );
        this.acaoOk = true
        return OleoDeRicino()
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

export class OleoDeRicino extends Objeto {
  constructor() {
    super(
      "oleo_de_ricino",
      "",
      "Um óleo de aroma marcante, util no preparo de remédios e poções de cura"
    );
    this.acaoOk = true;
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

export class CristalArcano extends Objeto {
  constructor() {
    super(
      "cristal_arcano",
      "",
      "Um pequeno cristal arroxeada, emite um leve brilho. Parece carregado com energia arcana."
    );
    this.acaoOk = true;
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`);
    }
  }

}

export class NotasDePesquisa extends Objeto {
  constructor() {
    super(
      "notas_de_pesquisa",
      "Um papel de qualidade, com varios simbolos e pequenas anotações nas laterais",
      (`
        ┌─────────────────────────────────────────────────────────────────┐
        │                        Antídoto Antigo                          │
        │ Para emergências, cura todos os males mas causa flatulências    │
        │                                                                 │
        │ Ingredientes:                                                   │
        │ ┌──────────────────────┐   ┌──────────────────────┐             │
        │ │ Cachaça braba        │   │ Óleo de rícino       │             │
        │ └──────────────────────┘   └──────────────────────┘             │
        │ ┌────────────────────────┐ ┌─────────────────────────────┐      │
        │ │ Ponta de rabo de draco │ │ Sal rosa dos montes nevados │      │
        │ └────────────────────────┘ └─────────────────────────────┘      │
        │                                                                 │
        │ Modo de preparo:                                                │
        │ 1. Em um caldeirão alquímico deposite a cachaça e o óleo de     │
        │    rícino, aguarde borbulhar.                                   │
        │ 2. Adicione a PONTA do rabo de draco, muito importante, veja    │
        │    a cor mudar para verde (nota: se ficar laranja você tem 3    │
        │    segundos para correr).                                       │
        │ 3. Adicione o sal rosa para melhorar o sabor.                   │
        │ 4. Recolha o líquido em um recipiente de vidro escuro.          │
        │                                                                 │
        │ Deve ser servido em temperatura ambiente                        │
        └─────────────────────────────────────────────────────────────────┘
      `)
    );
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        this.acaoOk = true;
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

export class CaldeiraoAlquimico extends Objeto {
  #recipe_stage
  #recipe_steps
  constructor() {
    super(
      "caldeirao_alquimico",
      "Um imponente caldeirão prateado pendurado sobre uma chama azul vibrante",
      "O caldeirão repousa, agora vazio, sobre a chama extinta."
    );
    this.#recipe_stage = 0
    this.#recipe_steps = [
      [CachacaBraba(), OleoDeRicino()],
      [PontaDeRaboDeDraco()],
      [SalRosaDosMontesNevados()],
    ]
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "coletar":
        if (this.#recipe_stage+1 < this.#recipe_steps.length){
          console.log("A poção não parece estar pronta ainda ...");
          break;
        }
        this.acaoOk = true
        console.log(this.descricao);
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

  adicionar(ingredientes) {
    validate(ingredientes, "Array")
    const mensagemDeFalha = `O caldeirão começa a borbulhar fervorosamente,
            liberando vapores alaranjados que queimam ao toque, você sente o
            calor e sabe que errou na mistura, infelizmente é tarde demais ...
            ... Você sente o calor de mil estrelas e mais nada ...`;

    const mensagemDeSucesso = `O caldeirão repousa com um liquido verde azulado em seu interior.
    Parece que correu tudo bem, agora me resta coletar essa poção e curar o professor ...`

    // Adicionou mais ingredientes do que deveria:
    if (this.#recipe_stage + 1 > this.#recipe_steps[this.#recipe_stage].length) {
      console.log(mensagemDeFalha)
      return "FIM"
    }

    // Caso adicione ingredientes errados:
    ingredientes.forEach(item => {
      this.#recipe_steps[this.#recipe_stage].forEach(recipeItem => {
        if (!(item instanceof recipeItem)) {
          console.log(mensagemDeFalha)
          return "FIM"
        }
      });
    });

    // completou o estagio final
    if (this.#recipe_stage + 1 === this.#recipe_steps[this.#recipe_stage].length) {
      console.log(
        mensagemDeSucesso
      )
      return true
    }
    this.#recipe_stage += 1
  }

}
