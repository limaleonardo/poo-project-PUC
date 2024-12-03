import { Ferramenta } from "./Basicas";


// --------------------------------------------------------
export class FrascoDeVidroEscuro extends Ferramenta {
  #descricao
  #vazio
  constructor() {
    super("frasco_escuro");
    this.#descricao = (
      "Um frasco de vidro, escuro como a noite. \n"
      + "Perfeito para poções que necessitam de privacidade"
    )
    this.#vazio = true
  }

  get descricao() {
    return this.#descricao
  }

  usar() {
    action = this.#vazio ? "coletar" : "aplicar"
    this.#vazio = !this.#vazio
    return action
  }
}

// --------------------------------------------------------
export class LupaRevelacaoArcana extends Ferramenta {
  #descricao
  #bateria
  constructor() {
    super("lupa");
    this.#bateria = 10
    this.#descricao = (
      "Uma lupa prateada, de lente cristalina e um pequeno entalhe "
      + "no formato de um olho no topo. Capaz de revelar segredos ocultos...\n"
      + `Em seu aro é possivel ver a quantidade de usos restantes: ${this.bateria}`
    )
  }

  get descricao() {
    return this.#descricao
  }

  get bateria() {
    return this.#bateria
  }

  recarregar() {
    this.#bateria = 10
  }

  usar() {
    if(this.bateria <= 0) {
      console.log(
        "Parece que sua lupa esta sem cargas, "
        +"melhor procurar algo para recarregá-la"
      )
      return "faz nada"
    }
    this.#bateria -= 1
    return "investigar"
  }
}

// --------------------------------------------------------
export class FacaDeAprendiz extends Ferramenta {
  #descricao
  constructor() {
    super("faca");
    this.#descricao = (
      "Uma pequena faca prateada, cabo e laminas moldados no mesmo pedaço de metal frio. \n"
      + "Ótima para colher ervas e passar manteiga no pão. \n"
      + "Totalmente inutil para o combate!"
    )
  }

  get descricao() {
    return this.#descricao
  }

  usar() {
    return "cortar"
  }
}


// --------------------------------------------------------
export class PrensaDeMao extends Ferramenta {
  #descricao
  constructor() {
    super("prensa");
    this.#descricao = (
      "Um pequeno espremedor metalico, usa um inteligente sistema de alavancas. "
      + "Feito para caber no bolso e capaz de extrair sucos e óleos de plantas. \n"
      + "Exala um leve cheiro de limão..."
    )
  }

  get descricao() {
    return this.#descricao
  }

  usar() {
    return "espremer"
  }
}

