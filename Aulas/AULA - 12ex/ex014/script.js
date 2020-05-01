function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var boa = window.document.getElementById('boa')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora < 12 && hora >= 6) {
        //MANHA
        img.src = 'manha.png'
        document.body.style.background = '#f46930ff'
        boa.innerHTML = '~BOM DIA!~'
    }else if (hora < 18 && hora >= 12) {
        //TARDE   
        img.src = 'tarde.png'
        document.body.style.background = '#4b628fff'
        boa.innerHTML = '~BOA TARDE!~'
    }else {
        //NOITE
        img.src = 'noite.png'
        document.body.style.background = '#5c4b43ff'
        boa.innerHTML = '~BOA NOITE!~'
    }

}