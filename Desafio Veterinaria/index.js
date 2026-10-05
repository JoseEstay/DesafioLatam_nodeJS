const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === "registrar") {
    const nombre = argumentos[1];
    const edad = argumentos[2];
    const animal = argumentos[3];
    const color = argumentos[4];
    const enfermedad = argumentos[5];

    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no válida. Usa 'registrar' o 'leer'.");
}