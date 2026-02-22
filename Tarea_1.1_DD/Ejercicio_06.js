// 6. 🧠 Combinar dos listas sin repetir elementos

const combinarListasSinRepetir = (lista1, lista2) => {

    const resultado = []
    const registrados = {}

    for (let i = 0; i < lista1.length; i++) {

        const elemento = lista1[i]

        if (!registrados[elemento]) {
            registrados[elemento] = true
            resultado.push(elemento)
        }
    }

    for (let i = 0; i < lista2.length; i++) {

        const elemento = lista2[i]

        if (!registrados[elemento]) {
            registrados[elemento] = true
            resultado.push(elemento)
        }
    }

    return resultado
}

const lista1 = ['manzana', 'pera', 'banana']
const lista2 = ['pera', 'uva', 'manzana', 'sandía']

const resultado = combinarListasSinRepetir(lista1, lista2)
console.log(resultado)