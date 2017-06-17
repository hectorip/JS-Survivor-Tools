// For of

console.log(`
#################################################
For .. of ..

Permite trabajar sobre todos los valores de un
iterador de manera sencilla. Es el equivalente 
a for... in.., pero en vez de ir sobre las llaves
corre sobre los valores. Funciona con cualquier
objeto iterable.
#################################################
`);

// Arrays

let versiones = ["ES6", "ES7", "ES8"];

for(version of versiones){
    console.log(version);
}

// Mapas

let diccionario = new Map([
    ["pletórico", "Lleno de algo bueno"],
    ["inmarcesible", "Que no se puede marchitar"],
]);

console.log(diccionario.get('pletórico'));
for(definicion of diccionario){ // devuelve llave y valor
    console.log(definicion);
}

// Sets

let primos = new Set([1, 2, 3, 5]);
for(num of primos){
    console.log(num);
}