const dados = require ("./dados.json");


// ENCONTRAR MAIOR VALOR ////////////////////////////////////
const maiorValor = dados.sort((a, b)=>{
    return b.valor - a.valor 
})

console.log(maiorValor[0]);


// ENCONTRAR MENOR VALOR ////////////////////////////////////
const menorValor = dados.sort((a, b)=>{
    return a.valor - b.valor
})

console.log(menorValor[0])

// ENCONTRAR DIAS QUE FATURAMENTO DIÁRIO > FATURAMENTO MENSAL //

function mediaValores(){
    let valores = [];

    dados.map((value) => {
        valores.push(value.valor)
    })

    let soma = valores.reduce((antes, depois)=>{
        return antes + depois
    })

    return resultado = (soma/21).toFixed(4)
}

const filtrar = dados.filter((i)=>{
    let valores = Number(i.valor)
    return valores > mediaValores() 
})


    console.log(`A quantidade de dias em que o valor do faturamento diário foi maior do que a média do faturamento mensal é de ${filtrar.length} dias.`)


