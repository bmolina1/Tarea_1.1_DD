// 5. Eliminar duplicados por propiedad

const eliminarDuplicados = (arreglo, propiedad) => {

    const elementosUnicos = []
    const valoresRegistrados = {}

    for (let i = 0; i < arreglo.length; i++) {

        const valor = arreglo[i][propiedad]

        if (!valoresRegistrados[valor]) {
            valoresRegistrados[valor] = true
            elementosUnicos.push(arreglo[i])
        }
    }

    return elementosUnicos
}

const elementos = [
    { id: 1, nombre: 'A' },
    { id: 2, nombre: 'B' },
    { id: 1, nombre: 'A' }
]

const resultado = eliminarDuplicados(elementos, 'id')
console.log(resultado)