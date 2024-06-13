var Estudante = /** @class */ (function () {
    function Estudante(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    Estudante.prototype.getDescricao = function () {
        return "Nome: ".concat(this.nome, ", Idade: ").concat(this.idade, ", E-mail: ").concat(this.email);
    };
    return Estudante;
}());
var estudante1 = new Estudante('João', 20);
console.log(estudante1);
console.log(estudante1.getDescricao());
var estudante2 = new Estudante('Maria', 22, 'maria@gmail.com');
console.log(estudante2);
console.log(estudante2.getDescricao());
