console.log(`
#################################################
Registro Global para symbols

ES6 especifica un registro global de símbolos que
puede ser usado para guardar símbolos y traerlos
cuando se requiera acceder a la misma propiedad 
en otra parte del código.
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

let su_pueblo = Symbol('pueblo'); // No es el mismo
console.log(persona[pueblo]);
console.log(persona[su_pueblo]);

console.log(`
    Usando el registro global
`)
let papa = Symbol.for('padre'); // Verifica si está en el registro y lo trae

console.log(persona[padre]); // Es el mismo, por que lo trajo del registro
console.log(persona[papa]);


console.log(`
    Llave a partir de Symbolo
`);
console.log(Symbol.keyFor(padre));
