import { validate } from "bycontract";
import { Sala, Engine, Ferramenta, Objeto } from "./Basicas";

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

  pega(item) {
    validate(item, "String")
    let f = this.ferramentas.get(item);
    let o = this.objetos.get(item);

    // Se o item não existir nem em ferramentas nem em objetos,
    // retornamos  antecipadamente
    if (f == null && o == null) {
      console.log(`O item ${item} não está nessa sala`);
      return false;
    }
    // Se o item for uma ferramenta:
    if (f != null) {
      this.engine.mochila.set(f.nome, f);
      this.ferramentas.delete(item);
      console.log(
        `A ferramenta ${f.nome} foi adicionada na mochila`
      );
      return true;
    }
    // Se o item for um objeto:
    if (o != null) {
      this.engine.mochila.set(o.nome, o);
      this.objetos.delete(item);
      console.log(`O objeto ${item} foi adicionado na mochila`)
      return false;
    }
  }

  usa(nomeFerramenta, alvo) {
    validate(nomeFerramenta, "String")
    validate(alvo, "String")

    // Verifica se a ferramenta existe na mochila:
    f = this.engine.mochila.get(nomeFerramenta)
    if (f == null) {
      console.log(`Essa não! Eu não faço ideia de onde deixei a ferramenta ${nomeFerramenta}`);
      return false;
    }

    // Verifica se o alvo existe na sala ou na mochila
    o = this.objetos.get(alvo) || this.engine.mochila.get(alvo)
    if (o == null) {
      console.log(
        `Eu podia jurar que tinha visto o(a) ${alvo} por aqui...
        ... Devem ser os vapores ...
        (alvo não encontrado)`
      )
      return false;
    }

    // define o tipo de ação aplicado pela ferramenta:
    acao = f.usar()

    // Aplica a ação ao objeto alvo e verifica se algo foi retornado para adição a mochila
    resultado = o.usar(acao)
    if (resultado == null) {
      return false;
    }
    if (resultado instanceof Objeto) {
      this.engine.mochila.set(resultado.nome, resultado);
      return true;
    }
    if (resultado === "FIM") {
      this.engine.indicaFimDeJogo();
      return true;
    }
  }

  recarregar() {
    bateria = this.engine.mochila.get("cristal_arcano")
    lupa = this.engine.mochila.get("lupa")
    if (lupa == null) {
      console.log("Acho que não tenho nada que precise de carga no momento")
      return false
    }
    if(bateria == null) {
      console.log("Parece que não temos nenhuma fonte de energia para recarregar a nossa lupa")
      return false
    }

    lupa.recarregar()

    // uso unico, é destruido após a carga
    this.engine.mochila.delete("cristal_arcano")
  }

  adiciona(ingredientes) {
    validate(ingredientes, "Array")

    if (this.nome != "sala_altar") {
      console.log(
        "Essa sala não parece apropriada para isso ..."
      )
      return false
    }

    ingredientes.forEach(ingrediente => {
      if (this.engine.mochila.get(ingrediente) == null) {
        console.log(
          `Ah não! parece que não tenho o ingrediente ${ingrediente} na mochila.
          (Todos os itens listados precisam estar na mochila para prosseguir)`
        )
        return False
      }
    });

    caldeirao = this.objetos.get("caldeirao_alquimico")
    return caldeirao.adiciona(ingredientes)

  }


}
