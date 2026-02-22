// 4. Copiar y modificar objetos

const modificarPersona = (persona, nuevoNombre) => {

    const copia = {
        nombre: nuevoNombre,
        edad: persona.edad + 1
    }

    return copia
}

const persona = { nombre: 'Luis', edad: 30 }

const nuevaPersona = modificarPersona(persona, 'Carlos')
console.log(nuevaPersona)
console.log(persona)