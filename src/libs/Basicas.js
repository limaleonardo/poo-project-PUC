import {validate} from "bycontract";
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ---------------------------------------------
export class Ferramenta {
	#nome;

	constructor(nome) {
        validate(nome,"String");
		this.#nome = nome;
	}

	get nome() {
		return this.#nome;
	}
	
	usar() {
		return true;
	}
}

// ---------------------------------------------
export class Objeto {
	#nome;
    #descricaoAntesAcao;
    #descricaoDepoisAcao;
    #acaoOk;
    	
	constructor(nome,descricaoAntesAcao, descricaoDepoisAcao) {
		validate(arguments,["String","String","String"]);
		this.#nome = nome;
		this.#descricaoAntesAcao = descricaoAntesAcao;
		this.#descricaoDepoisAcao = descricaoDepoisAcao;
		this.#acaoOk = false;
	}
	
	get nome(){
		return this.#nome;
	}

	get acaoOk() {
		return this.#acaoOk;
	}

	set acaoOk(acaoOk) {
		validate(acaoOk,"Boolean");
		this.#acaoOk = acaoOk;
	}

	get descricao() {
		if (!this.acaoOk) {
			return this.#descricaoAntesAcao;
		}else {
			return this.#descricaoDepoisAcao;
		}
	}

	usar(ferramenta){
	}
}
// ---------------------------------------------
export class Sala {
	#nome;
	#objetos;
	#ferramentas;
	#portas;
	#engine;
	
	constructor(nome,engine) {
		validate(arguments,["String",Engine]);
		this.#nome = nome;
		this.#objetos = new Map();
		this.#ferramentas = new Map();
		this.#portas = new Map();
		this.#engine = engine;
	}

	get nome() {
		return this.#nome;
	}
	
	
	get objetos() {
		return this.#objetos;
	}

	get ferramentas() {
		return this.#ferramentas;
	}
	
	get portas(){
		return this.#portas;
	}

	get engine(){
		return this.#engine;
	}
	
	objetosDisponiveis(){
		let arrObjs = [...this.#objetos.values()];
    	return arrObjs.map(obj=>obj.nome+":"+obj.descricao);
	}

	ferramentasDisponiveis(){
		let arrFer = [...this.#ferramentas.values()];
    	return arrFer.map(f=>f.nome);		
	}
	
	portasDisponiveis(){
		let arrPortas = [...this.#portas.values()];
    	return arrPortas.map(sala=>sala.nome);
	}
	
	pega(nomeFerramenta) {
		validate(nomeFerramenta,"String");
		let f = this.#ferramentas.get(nomeFerramenta);
		if (f != null) {
			this.#engine.mochila = f;
			this.#ferramentas.delete(nomeFerramenta);
			return true;
		}else {
			return false;
		}
	}

	sai(porta) {
		validate(porta,"String");
		return this.#portas.get(porta);
	}

	textoDescricao() {
		let descricao = "Você está no "+this.nome+"\n";
        if (this.objetos.size == 0){
            descricao += "Não há objetos na sala\n";
        }else{
            descricao += "Objetos: "+this.objetosDisponiveis()+"\n";
        }
        if (this.ferramentas.size == 0){
            descricao += "Não há ferramentas na sala\n";
        }else{
            descricao += "Ferramentas: "+this.ferramentasDisponiveis()+"\n";
        }
        descricao += "Portas: "+this.portasDisponiveis()+"\n";
		return descricao;
	}

	usa(){
		return false;
	}
}
// ---------------------------------------------
//Exemplo de como pode ser a classe de controle do jogo
// ---------------------------------------------
export class Engine{
	#mochila;
	#salaCorrente;
	#fim;

	constructor(){
		this.#mochila = null;
		this.#salaCorrente = null;
		this.#fim = false;
		this.criaCenario();
	}

	get mochila(){
		return this.#mochila;
	}

	set mochila(ferramenta){
		validate(ferramenta,Ferramenta);
		this.#mochila = ferramenta;
	}

	get salaCorrente(){
		return this.#salaCorrente;
	}

	set salaCorrente(sala){
		validate(sala,Sala);
		this.#salaCorrente = sala;
	}

	indicaFimDeJogo(){
		this.#fim = true;
	}

	criaCenario(){}

	// Para poder acionar o método "joga" a classe
	joga() {
		let novaSala = null;
		let acao = "";
		let tokens = null;
		while (!this.#fim) {
			console.log("-------------------------");
			console.log(this.salaCorrente.textoDescricao());
			acao = prompt("O que voce deseja fazer? ");
			tokens = acao.split(" ");
			switch (tokens[0]) {
			case "fim":
				this.#fim = true;
				break;
			case "pega":
				if (this.salaCorrente.pega(tokens[1])) {
					console.log("Ok! " + tokens[1] + " guardado!");
				} else {
					console.log("Objeto " + tokens[1] + " não encontrado.");
				}
				break;
			case "inventario":
				console.log("Ferramenta disponivel para ser usada: " + this.#mochila.nome);
				break;
			case "usa":
					if (this.salaCorrente.usa(tokens[1])) {
						console.log("Feito !!");
						if (this.#fim == true){
							console.log("Parabens, voce venceu!");
						}
					} else {
						console.log("Não é possível usar " + tokens[1] + " nesta sala");
					}
				break;
			case "sai":
				novaSala = this.salaCorrente.sai(tokens[1]);
				if (novaSala == null) {
					console.log("Sala desconhecida ...");
				} else {
					this.#salaCorrente = novaSala;
				}
				break;
			default:
				console.log("Comando desconhecido: " + tokens[0]);
				break;
			}
		}
		console.log("Jogo encerrado!");
	}
}