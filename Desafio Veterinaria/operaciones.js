const fs = require('fs');
const registrar = (nombre, edad, animal, color, enfermedad) => {

    const buffer = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(buffer);

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log("¡Cita registrada con éxito!");
};

const leer = () => {
    const buffer = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(buffer);
    console.log(citas);
};

module.exports = { registrar, leer };