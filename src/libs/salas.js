import { validate } from "bycontract";
import { Sala, Engine } from "./Basicas";

class SalaBase extends Sala {
  constructor(nome, engine, objetos, ferramentas, portas) {
    // Valida os argumentos recebidos
    validate(arguments, ["String", Engine, "Map", "Map", "Map"]);

    // Invoca o construtor da classe base (Sala)
    super(nome, engine);

    // Inicializa objetos, ferramentas e portas diretamente nas propriedades públicas disponíveis
    for (const [key, value] of objetos.entries()) {
      this.objetos.set(key, value);
    }

    for (const [key, value] of ferramentas.entries()) {
      this.ferramentas.set(key, value);
    }

    for (const [key, value] of portas.entries()) {
      this.portas.set(key, value);
    }
  }

  pega(nomeFerramenta) {
    validate(nomeFerramenta, "String")
    let f = this.ferramentas.get(nomeFerramenta);
		if (f != null) {
			this.engine.mochila.set(f.nome, f);
			this.ferramentas.delete(nomeFerramenta);
      console.log(
        `A ferramenta ${f.nome} foi adicionada na mochila`
      )
			return true;
		}else {
      console.log(`A ferramenta ${nomeFerramenta} não está nessa sala`)
			return false;
		}
  }

}
