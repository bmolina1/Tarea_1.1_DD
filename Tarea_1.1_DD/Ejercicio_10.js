// 10. Verificar si todos los elementos cumplen una condición

const verificarMayoresDeEdad = (edades) => {

    return edades.every(edad => edad >= 18)

}
//const edades = [19, 35, 85, 18]
const edades = [19, 25, 32, 17]
const resultado = verificarMayoresDeEdad(edades)
console.log(resultado)