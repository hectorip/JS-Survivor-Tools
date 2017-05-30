// Sets
// Colecciones sin elementos repetidos, que no permiten consultar valores
// individualmente (por índice)

console.log(`
#################################################
Sets
#################################################
`);

let grupo = new Set();
grupo.add("Luffy");
grupo.add("Zoro");
grupo.add("Luffy"); // Es ignorado, ya existe

console.log(grupo);
console.log(grupo.size); // no tienen propiedad length, pero sí size


let mugiwara = new Set(["Luffy", "Zoro", "Ussop"]); // también pueden recibir un array como argumento

console.log(mugiwara);
console.log(mugiwara.size);

console.log(migiwara.has("Luffy"));
console.log(migiwara.has("Sanji"));

console.log(mugiwara.size);
mugiwara.clear(); // limpiar el array
console.log(mugiwara.size);

console.log(`
###################################################
Memory leak
Al agrgar un objeto a un Set, se crea un referencia
a él que previene que su memoria sea liberada por
el recolector de basura.
###################################################
`);
let personaje = {
    nombre: "Tony Tony Chopper",
    recompensa: 50
}
mugiwara.add(personaje);
personaje = null; // la referencia se queda guardada y no se puede reciclar la memoria

