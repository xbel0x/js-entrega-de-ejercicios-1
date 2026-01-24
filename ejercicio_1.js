function colorAleatorio() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    
    return `rgb(${red}, ${green}, ${blue})`
}

document.addEventListener('DOMContentLoaded', () => {    
    let button = document.querySelector('[class="ej1 button"]')
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = colorAleatorio()
    })
})