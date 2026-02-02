document.addEventListener('DOMContentLoaded', () => {
    let text = document.getElementById('ej8Text')
    let cantCaracteres = document.querySelector('[id="caracteres"] span')
    let cantPalabras = document.querySelector('[id="palabras"] span')
    
    text.addEventListener('keyup', () => {
        let arrayPalabras = text.value.replaceAll('\n', ' ').split(' ')
        arrayPalabras = arrayPalabras.filter(palabra => palabra != '')
        cantPalabras.textContent = arrayPalabras.length
        
        let arrayCaracteres = text.value.replaceAll('\n', ' ').split('')
        arrayCaracteres = arrayCaracteres.filter(letra => letra != ' ')
        cantCaracteres.textContent = arrayCaracteres.length
    })
})