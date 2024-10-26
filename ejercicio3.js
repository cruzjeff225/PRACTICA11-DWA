// REST AND SPREAD

// Ejemplo 3
// Simulando el procesamiento de datos de una API donde Rest agrupa los datos 
// adicionales y Spread los organiza en un formato específico

// Función que recibe datos de usuario y separa el resto de la información
function procesarUsuario(nombre, edad, ...otrosDatos) {
    let usuarioFormateado = {
        nombre,
        edad,
        // Usamos Spread para agrupar los datos adicionales en un solo objeto
        infoAdicional : {...otrosDatos}
    };
    return usuarioFormateado;
}

// Simulamos datos recibidos de una API
let usuario = procesarUsuario ("María", 30, "Ingeniería", "España", "Marzo 2024");

console.log(usuario)