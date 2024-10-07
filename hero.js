class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipoAtaque) {
        let ataque;

        switch (tipoAtaque) {
            case "1":
                ataque = "magia";
                break;
            case "2":
                ataque = "espada";
                break;
            case "3":
                ataque = "artes marciais";
                break;
            case "4":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

function escolherAtaque(heroi) {
    const tipoAtaque = prompt("Escolha o tipo de ataque:\n1 - Mago (magia)\n2 - Guerreiro (espada)\n3 - Monge (artes marciais)\n4 - Ninja (shuriken)");

    heroi.atacar(tipoAtaque);
}

const heroi1 = new Heroi("Gandalf", 300, "mago");
escolherAtaque(heroi1);  // Saída baseada na escolha do usuário

const heroi2 = new Heroi("Conan", 35, "guerreiro");
escolherAtaque(heroi2);  // Saída baseada na escolha do usuário

const heroi3 = new Heroi("Lao Tzu", 100, "monge");
escolherAtaque(heroi3);  // Saída baseada na escolha do usuário

const heroi4 = new Heroi("Naruto", 17, "ninja");
escolherAtaque(heroi4);  // Saída baseada na escolha do usuário
