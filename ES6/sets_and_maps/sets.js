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