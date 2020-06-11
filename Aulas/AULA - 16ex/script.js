var lista = []
function verificar() {
    var tab = document.getElementById('seltab')
    var txtnum = document.getElementById('numtxt')
    var número = Number(txtnum.value)
    

    if (número < 1) {
        window.alert('IMPOSSÍVEL CALCULAR!')
    } else {
        lista.push(número);
        if (número in lista) {
            window.alert('Este número já está na tabela')
        } else {
            tab.innerHTML = ''
            let item = document.createElement('option')
            item.text = `Número ${número} adicionado!`
            item.value = `tab`
            tab.appendChild(item)
        }
    }
}

