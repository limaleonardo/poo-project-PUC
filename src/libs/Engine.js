import { Engine } from "./Basicas.js";
import { Mochila } from "./Mochila.js";
import { SalaBase } from "./Salas.js";

export class EngineAventura extends Engine {
  #mochila
  constructor() {
    super();
    this.#mochila = new Mochila(); // Instância da classe Mochila
  }

  get mochila() {
    return this.#mochila;
  }

  criaCenario() {
    const salaInicial = new SalaBase(
      "sala_inicial",
      this,
      new Map(), // Objetos
      new Map(), // Ferramentas
      new Map() // Portas
    );
    this.salaCorrente = salaInicial;
  }
}
