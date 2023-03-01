const pergunta = function() {process.stdout.write("Digite um número para saber se ele pertence a  sequência de Fibonacci" + "\n")};

pergunta()

function quadradoIdeal (numquadrado){
    let a = parseInt(Math.sqrt(numquadrado))
    return (a*a == numquadrado)
}

function fibonacci(numero){
    const verifica = quadradoIdeal(5 * numero * numero + 4) || quadradoIdeal(5 * numero * numero -4);
    return verifica
}

for (let i =0; i<= 500; i++){
    fibonacci(i)? console.log(`${i} PERTENCE à sequência de Fibonacci`) : console.log(`${i} não pertence à sequência de Fibonacci`)
}





