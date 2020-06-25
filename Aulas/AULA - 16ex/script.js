let lista = []

var tab = document.getElementById('seltab')
var txtnum = document.getElementById('numtxt')
var número = Number(txtnum.value)

function IsNumber(n) {
    if(Number(n.value) >= 1 && Number(n.value) <= 100) {
        return true
    } else {
        return false
    }
}

function InList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}

function verificar() {
    if(IsNumber(txtnum.value) && !InList(txtnum.value, lista)) {
       window.alert("Tudo ok")
       lista.push(Number(txtnum.value))
    } else {
        window.alert('Dados inválidos ou número já adicionado!')
    }
}