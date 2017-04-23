//  Tap
// La función Tap sirve para ejecutar una función sobre un valor
// y recibir el mismo valor, para continuar trabajando con él.

const tap = function(value){
    return function(fn){
        (typeof(fn) === 'function'&& fn(value), val);
    }
}


mi_valor = tap(console.log)