import { validate } from "bycontract";

export class Mochila {
  #itens;

  constructor() {
    this.#itens = new Map();
  }

  set(nomeItem, item) {
    validate(arguments, ["String","Object"]);
    this.#itens.set(nomeItem, item);
    console.log(`Item ${nomeItem} adicionado à mochila.`);
  }

  delete(nome) {
    if (this.#itens.has(nome)) {
      this.#itens.delete(nome);
      console.log(`Item ${nome} removido da mochila.`);
    } else {
      console.log(`Item ${nome} não está na mochila.`);
    }
  }

  listar() {
    if (this.#itens.size === 0) {
      console.log("Sua mochila está vazia!");
    } else {
      console.log("Itens na mochila:");
      this.#itens.forEach((item) => console.log(`- ${item.nome}`));
    }
  }

  get(nome) {
    return this.#itens.get(nome) || null;
  }
}
