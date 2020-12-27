var num = document.getElementById('numero')
let tabela = document.getElementById('lista_tab')
var res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) > 0 && Number(n) < 101) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        tabela.innerHTML = ''
        for (let pos = 0; pos < valores.length; pos++) {
            var item = document.createElement('option')
            item.text = `Valor ${valores[pos]} adicionado.`
            item.value = `tabela${valores[pos]}`
            tabela.appendChild(item)
            resultado.innerHTML = '' // Limpara minha <div> painel </div>        
        }

    } else {
        window.alert('Valor ínvalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicionar valores antes de finalizar!')  
    } else {
        resultado.innerHTML = '' // Limpara minha <div> painel </div>

        var maior = valores[0]
        var menor = valores[0]
        let soma = 0
        for (let posição in valores) {
            if (valores[posição] > maior) {
                maior = valores[posição]
            } else if (valores[posição] < menor) {
                menor = valores[posição]
            }
            soma+=valores[posição]
        }
        let média = soma / valores.length

        // Abaixo irá mostrar os resultados no <<div id="resultado"> </div>>
        resultado.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados. </p>`       
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}. </p>` 
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}. </p>` 
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${média}. </p>`
    }
    
}
