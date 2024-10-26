// SPREAD


// Ejemplo 2
// Clonación y modificación de objetos en matrices sin afectar la matriz original

let estudiantes = [
    { nombre : "Ana", nota : 8},
    { nombre : "Carlos", nota : 9},
    { nombre : "Luis", nota : 7},
];

// Creamos una copia profunda usando Spread, modificando la nota Luis
let estudianteBackUp = estudiantes.map(estudiante =>
    estudiante.nombre === "Luis"
    ? {...estudiante, nota: 9} // Spread clona el objeto y luego mofifcamos la propiedad "nota"
    : {...estudiante} // Spread clona sin cambios 
);
// Resultado
console.log(estudianteBackUp);
console.log(estudiantes); // La matriz original no cambia