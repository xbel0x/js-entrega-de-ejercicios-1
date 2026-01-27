document.addEventListener('DOMContentLoaded', () => {
    let textarea = document.getElementById('ej3Textarea')
    let button = document.querySelector('button')
    let list = document.querySelector('[class="ej3 list"]')

    button.addEventListener('click', () => {
        let text = textarea.value
        let elem = document.createElement('li')
        let del = document.createElement('button')

        del.textContent = 'eliminar'
        del.addEventListener('click', () => {
            elem.remove()
        })

        elem.textContent = text
        elem.append(del)
        list.appendChild(elem)
        textarea.value = ''

    })
})