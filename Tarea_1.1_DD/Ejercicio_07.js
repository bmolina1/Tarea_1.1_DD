// 7. Contar cuántas veces aparece cada elemento

const contarPalabras = (palabras) => {

    const resultado = {}

    for (let i = 0; i < palabras.length; i++) {

        const palabra = palabras[i]

        if (resultado[palabra]) {
            resultado[palabra]++
        } else {
            resultado[palabra] = 1
        }
    }

    return resultado
}

const palabras = ['hola', 'adios', 'hola', 'gracias', 'hola', 'gracias']

const resultado = contarPalabras(palabras)
console.log(resultado)
