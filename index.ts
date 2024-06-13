class Estudante {

    public nome: string;
    public idade: number;
    private email: string | undefined;

    constructor(nome: string, idade: number, email?: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;

    }

    public getDescricao(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}, E-mail: ${this.email}`;
    }
}

const estudante1 = new Estudante('João', 20)
console.log(estudante1);
console.log(estudante1.getDescricao());

const estudante2 = new Estudante('Maria', 22, 'maria@gmail.com')

console.log(estudante2);    
console.log(estudante2.getDescricao());

