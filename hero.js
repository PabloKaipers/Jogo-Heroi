class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "ataque desconhecido"
        
        print(f"o {self.tipo} atacou usando {ataque}")


# Exemplo de uso da classe
heroi1 = Heroi("Gandalf", 300, "mago")
heroi1.atacar()  # Saída: o mago atacou usando magia

heroi2 = Heroi("Conan", 35, "guerreiro")
heroi2.atacar()  # Saída: o guerreiro atacou usando espada

heroi3 = Heroi("Lao Tzu", 100, "monge")
heroi3.atacar()  # Saída: o monge atacou usando artes marciais

heroi4 = Heroi("Naruto", 17, "ninja")
heroi4.atacar()  # Saída: o ninja atacou usando shuriken
