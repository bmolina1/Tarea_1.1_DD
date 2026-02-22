//2. Promesas encadenadas

const obtenerUsuario = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuarios = {
                1: "Juan",
                2: "María"
            }

            if (usuarios[id])
                resolve({ id: id, nombre: usuarios[id] })
            else
                reject("Usuario no encontrado")

        }, 2000)

    })
}

obtenerUsuario(1)
    .then((usuario1) => {
        return obtenerUsuario(2)
            .then((usuario2) => {
                console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`)
            })
    })
    .catch((error) => {
        console.log("Error:", error)
    })