console.log(`
#################################################
Mapas
Conjunto de claves y valores que permite usar 
caualquier dato como llave.
#################################################
`);

let un_mapa = new Map()
un_mapa.add("key", 1)

console.log(un_mapa.has("key"));

console.log(un_mapa.get("key"));
console.log(un_mapa.get("key2"));