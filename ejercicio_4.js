document.addEventListener('DOMContentLoaded', () => {
    let lista = ['Abel', 'Alina', 'Kharyna', 'Gloria', 'Frank', 'Naury', 'Fred']
    let elementoLista = document.querySelector('[class="ej4 list"]')
    let text = document.getElementById('ej4Text')

    for(nombre of lista) {
        let elem = document.createElement('li')
        elem.textContent = nombre
        elementoLista.appendChild(elem)
    }
    
    text.addEventListener('keyup', () => {
        let texto = text.value
        let listaActualizada = []
        
        for(nombre of lista) {
            if (nombre.startsWith(texto)){
                listaActualizada.push(nombre)
            }
        }
        
        elementoLista.innerHTML = ''
        
        for(nombre of listaActualizada) {
            let elem = document.createElement('li')
            elem.textContent = nombre
            elementoLista.appendChild(elem)
        }
    })

})