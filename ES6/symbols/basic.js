// Symbols

console.log(`
#################################################
Symbols
Son usados para asignar propiedades en los objetos
que sólo pueden ser accedidas mediante el uso del
mismo símbolo.

Son un nuevo tipo de dato primitivo.
#################################################
`);

let nombre = Symbol();
let persona = {};

persona[nombre] = "José Arcadio";

console.log(persona[nombre]); // José Arcadio
console.log(persona['nombre']); // undefined
console.log(persona.nombre); // undefined


console.log(`
#################################################
Symbols con descripción
Los síbmolos pueden tener descripciones para 
mejor debuggeo.
#################################################
`);

let uid = Symbol("unique_identifier");
console.log(nombre); // Symbol()
console.log(uid); // Symbol(unique_identifier)






