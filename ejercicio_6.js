document.addEventListener('DOMContentLoaded', () => {
    let temporizador = document.getElementById('temporizador')
    let iniciar = document.getElementById('iniciar')
    let pausar = document.getElementById('pausar')
    let reiniciar = document.getElementById('reiniciar')
    let intervalo

    iniciar.addEventListener('click', () => {
        let horas = parseInt(temporizador.textContent.split(':')[0])
        let minutos = parseInt(temporizador.textContent.split(':')[1])
        let segundos = parseInt(temporizador.textContent.split(':')[2])
        let status = temporizador.dataset.status
        
        intervalo = setInterval(()=> {
            segundos += 1
            if (segundos === 60) {
                minutos += 1
                segundos = 0
            }
            if (minutos === 60) {
                horas += 1
                minutos = 0
            }
            temporizador.textContent = `
            ${horas.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`
        }, 1000)
    })

    pausar.addEventListener('click', () => {
        clearInterval(intervalo)
    })

    reiniciar.addEventListener('click', () => {
        clearInterval(intervalo)
        temporizador.textContent = '00:00:00'
    })
})