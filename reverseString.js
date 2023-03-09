//DESAFIO 5

const stringTeste = "TARGET"

let reverseString = ""
for (let i = stringTeste.length - 1; i >= 0; i--) {
    reverseString += stringTeste[i]
}
console.log(reverseString)