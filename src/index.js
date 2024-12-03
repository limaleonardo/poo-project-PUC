import { EngineAventura } from "./libs/Engine.js";
import { SalaBase } from "./libs/Salas.js";
import { ProfessorDesacordado } from "./libs/Objetos.js";
import { FrascoDeVidroEscuro, LupaRevelacaoArcana } from "./libs/Ferramentas.js";

const engine = new EngineAventura();

const sala1 = new SalaBase(
  "sala_entrada",
  engine,
  new Map([
    ["professor", new ProfessorDesacordado()]
  ]),
  new Map([
    ["frasco", new FrascoDeVidroEscuro()],
    ["lupa", new LupaRevelacaoArcana()]
  ]),
  new Map()
);

// Configurando o jogo
engine.salaCorrente = sala1;

console.log("Bem-vindo à aventura!");
engine.joga();
