// REST AND SPREAD

// Ejemplo 4
// Filtrado y Reestructuración de matrices
// tomamos una matriz de productos, filtra solo aquellos que cumplen una condición y luego reestructura los resultados

let productos = [
    {nombre : "Laptop", precio : 800, categoria : "Electronica"},
    {nombre : "Bicicleta", precio : 300, categoria : "Deportes"},
    {nombre : "Teléfono", precio : 500, categoria : "Electronica"},
    {nombre : "Zapatillas", precio : 100, categoria : "Deportes"}
];

// Funcion que filtra productos por categoría y reorganiza los precios en un arreglo aparte
function filtrarProductosPorCategoria(categoria, ...listaProductos) {
    let filtrados = listaProductos.filter(producto => producto.categoria === categoria);
    let precios = filtrados.map(producto => producto.precio);

    return {
        categoria,
        productosFiltrados : filtrados,
        //Usamos Spread par incluir los precios en el objeto final
        precios: [...precios]
    };
}

// Llamando a la funcion con productos filtrados por "Electronica"
let resultado = filtrarProductosPorCategoria("Electronica", ...productos);
console.log(resultado);
