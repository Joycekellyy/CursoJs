let num = [4, 8, 4, 7, 3, 6]

console.log(num)
//console.log(`O vetor contém ${num.length} posições.`)
//console.log(`O primeiro valor do vetor é: ${num[0]}`)
/*
var cont = 0
while (cont < num.length) {
    console.log(`${num[cont]}`)
    cont++
}
*/
for (var c = 0; c < num.length; c++) {
    console.log(`${num[c]}`)
}

let posição = num.indexOf(5)
if (posição == -1) {
    console.log('O valor não foi encontrado nas numerações...')
}else {
    console.log(`O valor 3 foi encontrado na posição ${posição}.`)
}