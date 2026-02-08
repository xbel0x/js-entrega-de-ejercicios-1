document.addEventListener('DOMContentLoaded', () => {
    let listadoTareas = document.getElementById('listadoTareas')
    let agregarTarea = document.getElementById('agregarTarea')
    let limpiar = document.getElementById('limpiar')

    if (localStorage.getItem('datos') == null) {
        localStorage.setItem('datos', '[]')
    }

    if (localStorage.getItem('datos') != '[]') {
        let datosLocales = JSON.parse(localStorage.getItem('datos'))
        for (let dato of datosLocales) {
            let tarea = document.createElement('p')
            let check = document.createElement('input')
            check.type = 'checkbox'
            tarea.append(check, dato)
            listadoTareas.append(tarea)
        }
    }

    agregarTarea.addEventListener('click', () => {
        let input = prompt('Introduzca la tarea que desea añadir:')
        let datosLocales = JSON.parse(localStorage.getItem('datos'))

        if (input != null) {
            let tarea = document.createElement('p')
            let check = document.createElement('input')
            check.type = 'checkbox'
            tarea.append(check, input)
            listadoTareas.append(tarea)
            datosLocales.push(input)
        }

        localStorage.setItem('datos', JSON.stringify(datosLocales))
    })

    limpiar.addEventListener('click', () => {
        let arrayTareas = listadoTareas.children
        let datosLocales = JSON.parse(localStorage.getItem('datos'))

        for (let i = arrayTareas.length - 1; i >= 0; i--)  {
            let checkbox = arrayTareas[i].querySelector('input')
            if (checkbox.checked) {
                datosLocales = datosLocales.filter(element => element != arrayTareas[i].textContent)
                arrayTareas[i].remove()
            }
        }
        localStorage.setItem('datos', JSON.stringify(datosLocales))
    })
})