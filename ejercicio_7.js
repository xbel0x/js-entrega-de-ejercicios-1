document.addEventListener('DOMContentLoaded', () => {
    const generarClaveAleatoria = (len) => {
        const minusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const numeros = '0123456789'.split('')
        const especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?'.split('');
        
        let pass = ''
        let tiposDeCaracteres = [minusculas, mayusculas, numeros, especiales]
        
        for (let i = 0; i < len; i++) {
            let tipoDeCaracter = tiposDeCaracteres[Math.floor(Math.random() * tiposDeCaracteres.length)]
            let caracter = tipoDeCaracter[Math.floor(Math.random() * tipoDeCaracter.length)]
            pass = pass.concat(caracter)           
        }
        return pass
    }

    let gen = document.getElementById('generar')
    let pass = document.getElementById('pass')
    
    gen.addEventListener('click', () => {
        let len = document.getElementById('longitud').value
        if (parseInt(len) < 4 || len == '') {
            alert('La longitud debe ser mayor o igual a 4.')
        } else {
            pass.textContent = `Su contraseña es: ${generarClaveAleatoria(len)}`
        }
    })
})