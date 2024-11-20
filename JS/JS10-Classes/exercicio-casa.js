console.clear();

class contaBancaria {
  constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.sexo = sexo;
    this.agencia = agencia;
    this.conta = conta;
    this.numeroConta = numeroConta;
  }

  contaPoupança() {
    if (this.conta == "Poupança") {
      return this.salario - this.salario * 0.015;
    } else {
      console.log("Não há uma conta poupança");
    }
  }

  contaCorrente() {
    if (this.conta == "Corrente") {
      return this.salario - this.salario * 0.036;
    } else {
      console.log("Não há uma conta corrente");
    }
  }

  contaEstudante() {
    if (this.conta == "Estudante") {
      return this.salario - this.salario * 0.012;
    } else {
      console.log("Não há uma conta de estudante.");
    }
  }
}


let exemplo1 = new contaBancaria('Sabrina', 21, 2003, 'F', 3, 'Poupança', 754569)

let exemplo2 = new contaBancaria('Victor', 21, 2003, 'M', 7, 'Corrente', 586542)

let exemplo3 = new contaBancaria('Gabi', 19, 2005, 'F', 2, 'Estudante', 653542)

console.log(`Nome: ${exemplo1.nome}, Idade: ${exemplo1.idade} anos, Salário: ${exemplo1.salario}, Sexo: ${exemplo1.sexo}, Agência: ${exemplo1.agencia}, Tipo de Conta: ${exemplo1.conta}, Número da Conta: ${exemplo1.numeroConta} O novo salário com a taxa descontada é: ${exemplo1.contaPoupança()}`)

console.log(`Nome: ${exemplo2.nome}, Idade: ${exemplo2.idade} anos, Salário: ${exemplo2.salario}, Sexo: ${exemplo2.sexo}, Agência: ${exemplo2.agencia}, Tipo de Conta: ${exemplo2.conta}, Número da Conta: ${exemplo2.numeroConta} O novo salário com a taxa descontada é: ${exemplo2.contaCorrente()}`)

console.log(`Nome: ${exemplo3.nome}, Idade: ${exemplo3.idade} anos, Salário: ${exemplo3.salario}, Sexo: ${exemplo3.sexo}, Agência: ${exemplo3.agencia}, Tipo de Conta: ${exemplo3.conta}, Número da Conta: ${exemplo3.numeroConta} O novo salário com a taxa descontada é:  ${exemplo3.contaEstudante()}`)