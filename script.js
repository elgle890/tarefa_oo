function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}

function Mamifero(nome){
    Animal.call(this, nome, "Mamifero");
    this.poeOvos = function() {
        return false;
    }
}

function Reptil(nome) {
    Animal.call(this, nome, "Reptil");
    this.poeOvos = function() {
        return true;
    }
}

const humano = new Mamifero("humano");
const cobra = new Reptil("cobra");
const panda = new Mamifero("panda");