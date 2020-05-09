function calcular() {
  var res = document.getElementById('res')
  res.innerHTML = ''
  var res = document.getElementById('res')
  
  var numt = document.getElementById('txtnum')
    var número = Number(numt.value)
    if (numt.value.length == 0) {
        res.innerHTML = 'Impossível calcular.'
    }else {
        for (var c = 1; c <= 10; c ++) {
            if (c == 1) {
                multiplição = número
            }  
            res.innerHTML += `${c} X ${número} = ${multiplição}<br>`
            multiplição += número


        }
    }
}
