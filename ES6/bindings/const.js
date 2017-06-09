// La palabra reservada 'const' hace un binding de
// un nombre con un valor dentro de su contexto, aplicando las mismas
// reglas de shadowing que el binding de los parámetros de funciones:
// el nombre del contexto eclipsa los nombres superiores.

const PI = 3;
((diametro) => {
    const PI = 3.14159265;
    return PI * diametro;
})(5);

// Re-asignación de valores const

// Un valor asignado con 'const' no se puede re-asignar
const PI = 3;
((diametro) => {
    PI = 3.14159265; // Error en ejecución
    return PI * diametro;
})(5);