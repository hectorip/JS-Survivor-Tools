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

// Las llaves no son forzadas en string
let key_str = "5", key_number = 5;
un_mapa.set(key_str, "Cinco");
un_mapa.set(key_number, 4.99);

console.log(`El mapa tiene la llave "5": ${un_mapa.has("5")}`);
console.log(`El mapa tiene la llave 5 (número): ${un_mapa.has(5)}`);

console.log(`El valor de la llave "5": ${un_mapa.get("5")}`);
console.log(`El número de la llave 5(número): ${un_mapa.get(5)}`);

// Size antes y después de clear
console.log(un_mapa.size);
un_mapa.clear();
console.log(un_mapa.size);


