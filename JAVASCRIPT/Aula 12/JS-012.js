var agora = new Date()
var hora = agora.getHours()

console.log(`Àgora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom Dia!')

} else if (hora <= 18) {
    console.log('Boa Tarde!')

} else if (hora <= 5) {
    console.log('Boa Madrugada!')

} else {
    console.log('Boa noite!')
}
