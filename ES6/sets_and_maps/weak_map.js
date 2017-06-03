console.log(`
#################################################
Weak Maps
Los Weak Maps tienen el mismo objetivo que los 
Weak Sets, cuando se introduce un objeto como
llave, se crea sólamente una referencia débil, 
por lo que si todas las demás referencias al
objeto son eliminadas, el mapa no conserva esa 
llave y su valor correspondiente.

No es enumerable(no posee el método forEach() ni
clear()), no tiene tampoco la propiedad size.

Su uso más común es para almacenar objetos del
DOM que pueden desaparecer sin ser borrados
explícitamente del mapa.

Puden usarse para simular propiedades privadas
con eficiencia de memoria.
#################################################
`);

let elemento = {tag: "p", id: "mi-parrafo"}, // supongamos que esto viene del DOM con document.querySelector('#mi-parrafo')
    datos_extra = new WeakMap();

datos_extra.set(elemento, {dato1: "Es un párrafo"});
console.log(datos_extra.has(elemento)); // Lo tiene
console.log(datos_extra.get(elemento)); // Lo tiene

elemento = undefined;  // Se ha eliminado la variable (o referencia) que apuntaba al objeto

// No hay manera de comprobar que el objeto ha desaparecido,
// pero la especificación dice que se elimina para evitar
// Fugas de memoria.


