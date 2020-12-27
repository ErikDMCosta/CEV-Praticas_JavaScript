function verificar() {
    //window.alert('FUNCIONOU!')
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = window.document.getElementById('texto_ano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //window.alert('Tudo OK')
        var res_sex = document.getElementsByName('radio_sex')
        var idade = ano - Number(form_ano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // HTML: <img id='foto'>
        
        if (res_sex[0].checked) { // [0]-Masculino
            gênero= 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (res_sex[1].checked) { // [1]- Feminino
            gênero= 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}