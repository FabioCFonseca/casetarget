// DESAFIO 2
//SEQUÊNCIA FIBONACCI

const fibonacci = (numeroInformado) => {
    
    let fib = [0, 1]
    
    while (fib[fib.length - 1] < numeroInformado) {
      let sequencia = fib[fib.length - 1] + fib[fib.length - 2]
      fib.push(sequencia);
    }
    
    if (fib.indexOf(numeroInformado) !== -1) {
      console.log(numeroInformado + " pertence à sequência de Fibonacci.");
    } else {
      console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
    }
  }
  
  fibonacci()





