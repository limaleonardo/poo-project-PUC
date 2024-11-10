import { Objeto } from "./Basicas.js";
import { validate } from "bycontract"

// ----------------------------------------------------
export class ProfessorDesacordado extends Objeto {
  constructor() {
    super(
      "professor",
      "O professor parece preso em um sono profundo",
      "O professor despertou. Ainda confuso, mas ficará bem."
    );
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "investigar":
        console.log("lorem ipsilum");
        break;
      case "aplicar":
        console.log("dolor sit ammet");
        this.acaoOk = true;
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
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
        this.acaoOk = true
        console.log(this.descricao);
        this.acaoOk = true;
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
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
        if(!this.acaoOk) {
          console.log(
            "Com um pouco de dificuldade você remove "
            + "a seta presente na ponta da peça de carne"
          );
          this.acaoOk = true
          break;
        }
        console.log("Sua faca não parece ser capaz de cortar a seção mais espessa da cauda ...")
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

// ----------------------------------------------------
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
        break;
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
        break;
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
  constructor() {
    super(
      "caldeirao_alquimico",
      "",
      ""
    );
  }

  usar(acao) {
    validate(acao, "String");
    switch (acao) {
      case "coletar":
        this.acaoOk=true
        console.log("lorem ipsilum");
        break;
      default:
        console.log(`Você não pode fazer isso (${acao}) com ${this.nome}`)
    }
  }

}

