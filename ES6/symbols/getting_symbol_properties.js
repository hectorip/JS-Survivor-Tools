// Listando propiedades con Symbol como nombre

console.log(`
#################################################
Listando propiedades de los objetos con nombres
como símbolos.
#################################################
`);

let pueblo = Symbol('pueblo');
let padre = Symbol.for('padre'); // Lo crea en el registro

let persona = {
    nombre: "Aureliano",
    [pueblo]: "Macondo", // los símbolos pueden ser usados en cualquier lugar 
                       // en que las propiedades calculadas sean permitidas
    [padre]: "José Arcadio"
}

Object.defineProperties(persona, {
    enfermedad: {
        value: 'Enfermedad del sueño',
        enumerable: false
    }
});
console.log(Object.keys(persona)); // ['nombre']
console.log(Object.getOwnPropertyNames(persona)); // ['nombre', 'enfermedad']
// ninguna de las dos trae las propiedades Symbol

console.log(`
    Usando la función Object.getOwnPropertySymbols();
`);
console.log(Object.getOwnPropertySymbols(persona)); // [Symbol(pueblo), Symbol(padre)]


