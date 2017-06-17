// Built-in iterators for collections

console.log(`
#################################################
Iteradores de los arrays, sets y mapas
Las colecciones default de JS tienen 3
iteradores:
entries() -> devulve pares de claves y valores
values() -> devuelve los valores
keys() -> devuleve las llaves
#################################################
`);

let fibonacci = [1, 1, 2, 3, 5];
let primos = new Set([1, 2, 3, 5]);
let series = new Map([
    ["fibonacci", fibonacci],
    ["primos", primos]
]);

// entries
console.log("Entradas de 'fibonacci'")
for(entry of fibonacci.entries()){
    console.log(entry);
}
console.log("Entradas de 'primos'")
for(entry of primos.entries()){
    console.log(entry);
}
console.log("Entradas de 'series'")
for(entry of series.entries()){
    console.log(entry);
}


// values
console.log("Valores de 'fibonacci'")
console.log("No es compatible con Node, y tampoco con Chrome")
// for(entry of fibonacci.values()){
//     console.log(entry);
// }

// No es compatible 

console.log("Valores de 'primos'")
for(entry of primos.values()){
    console.log(entry);
}

console.log("Valores de 'series'")
for(entry of series.values()){
    console.log(entry);
}

// keys
console.log("Llaves de 'fibonacci'")
for(entry of fibonacci.keys()){
    console.log(entry);
}

console.log("Llaves de 'primos'")
for(entry of primos.keys()){
    console.log(entry);
}

console.log("Llaves de 'series'")
for(entry of series.keys()){
    console.log(entry);
}
