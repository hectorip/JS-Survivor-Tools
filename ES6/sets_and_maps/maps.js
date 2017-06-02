console.log(`
#################################################
Mapas
Conjunto de claves y valores que permite usar 
caualquier dato como llave.
#################################################
`);

let un_mapa = new Map()

// Tienen operaciones muy parecidas a los sets
un_mapa.set("key", 1)

console.log(un_mapa.has("key"));

console.log(un_mapa.get("key"));
console.log(un_mapa.get("key2"));
