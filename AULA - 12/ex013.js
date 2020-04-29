var agora = new Date()
var diase = agora.getDay()
switch(diase) {
    case 1:
        diase = 'Segunda'
        break
    case 2:
        diase = 'Terça'
        break
    case 3:
        diase = 'Quarta'
        break
    case 4:
        diase = 'Quinta'
        break
    case 5:
        diase = 'Sexta'
        break
    case 6:
        diase = 'Sábado'
        break
    case 0:
        diase = 'Domingo'
        break
    default:
        console.log('[ERRO] Dia inválido.')
}
console.log(diase)