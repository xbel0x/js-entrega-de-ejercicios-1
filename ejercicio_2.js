document.addEventListener('DOMContentLoaded', () => {
    let cantClics = 0
    let text = document.getElementById('clics')
    let button = document.querySelector('.button')
    
    button.addEventListener('click', () => {
        cantClics += 1
        text.textContent = `Clics: ${cantClics}`
    })
})