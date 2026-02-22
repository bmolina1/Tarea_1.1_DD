// 3. Calcular promedio ponderado

const promedioPonderado = (notas) => {

    let suma = 0

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i].valor * notas[i].peso
    }

    return suma
}

const notas = [
    { valor: 90, peso: 0.5 },
    { valor: 80, peso: 0.3 },
    { valor: 70, peso: 0.2 }
]

const resultado = promedioPonderado(notas)
console.log(resultado)