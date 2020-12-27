function contar() {
    var inicio = document.getElementById('num_inicio') 
    var fim = document.getElementById('num_fim') 
    var passo = document.getElementById('num_passo')
    var resultado = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (var contador = i; contador <= f; contador += p) {
                resultado.innerHTML += `${contador} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for (var contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += `${contador} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`     
    }
}


