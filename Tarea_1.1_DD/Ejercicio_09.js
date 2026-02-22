// 9. Simular carga con promesa y setTimeout

const cargarDatos = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Datos cargados correctamente")

        }, 2000)

    })
}

cargarDatos().then((mensaje) => {
    console.log(mensaje)
})