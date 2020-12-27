let num = [5, 8, 2, 9, 3] // let OU var
// posição 0, 1. 2, 3, 4
console.log(num) // Imprimindo valores do vetor
console.log(`Nosso vetor é o ${num}`) // Frase com valores do vetor
console.log(`O vetor tem ${num.length} posições.`)

console.log(num[0]) // Mostrando posição zero sem formatação do vetor

num.push(1)
num.sort()
//num.push(1)
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O segundo valor do vetor é ${num[1]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valore está na posição ${pos}`)
}

/* 

//**Essa parte de baixo eu mesmo montei**

num[3] = 6 // Na 3º posição coloque o valor 6 caso
num[5] = 7 // Caso não haja posição o JS irá criar se esse for a próxima
num.push(8) // Método interno que acrescenta valores em um array na última posição
console.log(`Nosso vetor alterado fica assim ${num}`)
console.log(`O vetor possuí ${num.length} elementos`) // Método interno que mostra o comprimento do vetor - array
num.sort() // Método interno que mostrará em ordem crescente
console.log(`O vetor em ordem fica ${num}`)

*/