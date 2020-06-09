function par_ou_ímpar(number) {
    if (number % 2 == 0) {
        return 'THIS NUMBER IS EVEN/PAR!'
    } 
    else {
        return 'THIS NUMBER IS ODD/ÍMPAR!'
    }
}

var num = 233
console.log(`O número ${num} está sendo verificado...`)
console.log(par_ou_ímpar(num))