class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agência;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor ){
            this.#saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0) return;
        this.#saldo += valor;
    }
}

const client1 = new Cliente();
client1.nome = "ricardo";
client1.cpf = 11122233309;
client1.rg = 123456;

const client2 = new Cliente();
client2.nome = "Alice";
client2.cpf = 8882223309;
client2.rg = 987654321;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agência = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(200);

console.log(valorSacado);
console.log(contaCorrenteRicardo);cd 