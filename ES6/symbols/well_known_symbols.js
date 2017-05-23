console.log(`
#################################################
Símbolos conocidos (well-known Symbols)

Con el objetivo de permitir cambiar algunas
funciones que en ES5 parecían mágicas, ES6 ha
hecho disponibles una serie de Symbols que pueden
usarse para sobreescribir o acceder a comportami-
entos default. Todos están disponibles a través
del objeto Symbol, como propiedades.
La referencia completa está en: 
https://goo.gl/KPrJyP
#################################################
`);

console.log(`
    Ejemplo: Symbol.toStringTag;
    `);
console.log(Symbol.toStringTag);

let Persona = {
    nombre: "Bartleby"
}
Persona.prototype[Symbol.toStringTag] = function(){
    return "Persona";
}

