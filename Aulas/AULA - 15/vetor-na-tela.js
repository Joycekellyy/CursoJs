let num = [5, 8, 3, 2, 6, 9]
var c = 0
console.log('WHILE {')
while (c < num.length) {// ULTILIZACÃO DO WHILE
    console.log(`Na posição ${c}, encontramos ${num[c]}.`)
    c++
}
console.log('}')

console.log('FOR {')
for (let c = 0; c < num.length; c++) {// ULTILIZAÇÃO DO FOR
    console.log(`Na posição ${c}, encontramos ${num[c]}.`)
}
console.log('}')

console.log('NEW FOR {')
for (var c in num) {// NEW FOR
    console.log(`Na posição ${c}, encontramos ${num[c]}.`)
}
console.log('}')