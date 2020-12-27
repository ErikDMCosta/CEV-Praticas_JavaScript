function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = nº
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    if (minuto < 10) {
        minuto = "0" + minuto
    }
    mensagem.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = 'manha.png'
        document.body.style.background = '#cf6c1e'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#ba3700'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#343d3f'
    }
}