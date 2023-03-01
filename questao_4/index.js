const sp = 67836.43
const rj = 36678.66 
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const valorTotal = sp + rj + mg + es + outros ;

const formatar = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'})
.format(valorTotal);


function calcularPercentual (valorTotal){
    const sp_porcent = (sp * 100)/valorTotal
    const rj_porcent = (rj * 100)/valorTotal
    const mg_porcent = (mg * 100)/valorTotal
    const es_porcent = (es * 100)/valorTotal
    const outros_porcent = (outros * 100)/valorTotal

    return console.log(`O percentual de representação de cada estado é:
    São Paulo = ${sp_porcent.toFixed(2)} %
    Rio de Janeiro = ${rj_porcent.toFixed(2)} %
    Minas Gerais = ${mg_porcent.toFixed(2)} %
    Espírito Santo = ${es_porcent.toFixed(2)} %
    Outros estados = ${outros_porcent.toFixed(2)} %
    `)
}

calcularPercentual(valorTotal)


