document.addEventListener('DOMContentLoaded', () => {
    let n1 = document.getElementById('number1')
    let n2 = document.getElementById('number2')
    let operaciones = document.querySelectorAll('button')
    let resultado = document.getElementById('resultado')

    for (let operacion of operaciones) {
        if (operacion.id === 'suma') {
            operacion.addEventListener('click', () => {
                let total = Number(n1.value) + Number(n2.value)
                resultado.innerText = total
            })
        } else if (operacion.id === 'resta') {
            operacion.addEventListener('click', () => {
                let total = Number(n1.value) - Number(n2.value)
                resultado.innerText = total
            })
        } else if (operacion.id === 'multiplicacion') {
            operacion.addEventListener('click', () => {
                let total = Number(n1.value) * Number(n2.value)
                resultado.innerText = total
            })
        } else if (operacion.id === 'division') {
            operacion.addEventListener('click', () => {
                if (n1.value == 0 || n2.value == 0) {
                    resultado.innerText = 'N/S'
                } else {
                    let total = Number(n1.value) / Number(n2.value)
                    resultado.innerText = total
                }
            })
        }
    }
})