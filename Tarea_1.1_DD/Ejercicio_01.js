// 1. Agrupar elementos por propiedad

function agruparPorPropiedad(array, propiedad) {
  const resultado = {};

  for (let i = 0; i < array.length; i++) {
    const clave = array[i][propiedad];

    if (!resultado[clave]) {
      resultado[clave] = [];
    }

    resultado[clave].push(array[i]);
  }

  return resultado;
}

const datos = [
 { categoria: 'fruta', nombre: 'manzana' },
 { categoria: 'verdura', nombre: 'zanahoria' },
 { categoria: 'fruta', nombre: 'banana' },
 { categoria: 'verdura', nombre: 'lechuga' }
];

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);
