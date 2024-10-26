// REST AND SPREAD

// Ejemplo 1
// Función que combina multiples listas y elimina duplicados
function mezclarListas(...listas) {
    // Usando Spread para aplanar las listas y Set para eliminar duplicados
    let combinadaSinDuplicados = [...new Set ([].concat(...listas))];
    return combinadaSinDuplicados;
}

let lista1 = [1, 2, 3];
let lista2 = [3, 4, 5];
let lista3 = [5, 6, 7];

// Pasamos varias matrices usando Rest y combinamos con Spread
console.log(mezclarListas(lista1, lista2, lista3));

