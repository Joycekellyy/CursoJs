function verificar(){
    var res = document.getElementById('res')
    res.innerHTML = 'Sua Contagem é: <br>'
    var res = document.getElementById('res')
    var iníciot = document.getElementById('txti')
    var fimt = document.getElementById('txtfim')
    var passot = document.getElementById('txtpasso')
    
    if (iníciot.value.length == 0 || fimt.value.length == 0 || passot.value.length == 0) {
        window.alert('[ERRO] Insira os dados corretamente.')
        res.innerHTML = 'Impossível contar!'
    }else {
        var início = Number(txti.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        if (passo <= 0) {
            window.alert('Passo inválido. O passo passará a ser "1"')
            passo = 1
        }
        if (início < fim) {//CONTAGEM CRESCENTE
            for (var c = início; c <= fim; c += passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {//CONTAAGEM REGRESSIVA
            for (var c = início; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` FIM!`
        
        
    }
}