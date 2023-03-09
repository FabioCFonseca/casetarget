const Percentual = () => {
    let fat = {
        sp: 67836.43,
        rj: 36678.66,
        mg: 29229.88,
        es: 27165.48,
        outros: 19849.53 
    }

    const valorTotal = Object.values(fat).reduce((acc, curr) => acc + curr, 0)

    console.log(valorTotal)

    const { sp, rj, mg, es, outros } = fat

    let percSp = sp/valorTotal*100
    let percRj = rj/valorTotal*100
    let percMg = mg/valorTotal*100
    let percEs = es/valorTotal*100
    let percOutros = outros/valorTotal*100
    
    console.log(percSp, percRj, percMg, percEs, percOutros)
}

Percentual()


