function calcular() {
    var tab = document.getElementById('seltab')
    var numt = document.getElementById('txtnum')
    if (numt.value.length == 0) {
        res.innerHTML = 'Impossível calcular.'
    }else {
        let número = Number(numt.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${número} X ${cont} = ${número*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}

