class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';
    
        switch (this.tipo) {
          case 'mago':
            ataque = 'magia';
            break;
          case 'guerreiro':
            ataque = 'espada';
            break;
          case 'monge':
            ataque = 'artes marciais';
            break;
          case 'ninja':
            ataque = 'shuriken';
            break;
          default:
            ataque = 'usou um ataque desconhecido';
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi('Herói Magico', 25, 'mago');
heroi1.atacar();


 