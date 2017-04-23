//  Tap
// La función Tap sirve para ejecutar una función sobre un valor
// y recibir el mismo valor, para continuar trabajando con él.

const tap = function(fn){
    return (fn(val), val);
}
