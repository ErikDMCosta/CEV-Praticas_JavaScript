function calcular() {
    var numero = document.getElementById('numero')
    var tab = document.getElementById('selecao_tab')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var numérico = Number(numero.value)
        tab.innerHTML = ''
        for (var contador = 1; contador <=10; contador++) {
            var item = document.createElement('option')
            item.text = `${numérico} x ${contador} = ${numérico * contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)

        }
    }
}