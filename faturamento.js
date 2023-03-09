//DESAFIO 3

// NÃO HAVIA O JSON NA PLATAFORMA DA GUPY 
// DESENVOLVI UMA FUNÇÃO GENÉRICA

const Faturamento = (...valorDiario) => {
    const logValores = [...valorDiario]

    let menorValor = Math.min(...logValores)
    let maiorValor = Math.max(...logValores)
    let valorTotal = logValores.reduce((accumulator, val) => { return accumulator + val}, 0)
    let dias = logValores.length
    let mediaMensal = valorTotal/dias
    let diasAcimaMedia = logValores.filter(valor => valor > mediaMensal)

    console.log(logValores)
    console.log(menorValor)
    console.log(maiorValor)
    console.log(diasAcimaMedia)

}

Faturamento()



