function verificar() {
    var resposta = window.document.getElementById('resposta')
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtano') 
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert('[ERRO] Insira os dados corretamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var nasc = Number(txtano.value)
        var idade = ano - nasc
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <=10) {
                //criança
                img.setAttribute('src', 'crianca-f.png')
            }else if (idade < 21) {
                //jpvem
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }else {
            gênero = 'Homem'
            if (idade >=0 && idade <=10) {
                //criança
                img.setAttribute('src', 'crianca-m.png')
            }else if (idade < 21) {
                //jpvem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `<p>Detectamos um(a) ${gênero} com ${idade} anos de idade.</p>`
        resposta.appendChild(img)
    }
}
