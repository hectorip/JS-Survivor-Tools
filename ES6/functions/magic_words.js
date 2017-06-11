// Las palabras mágicas 'this' y 'arguments' están presentes dentro de las 
// funciones de JS, excepto en las arrow functions.


// Arguments contiene TODOS los parámetros pasados a a la función, 
// independientemente de cuántos se hayan declarado.

(function(arg0){ return arguments[0]})('Parangaricutirimicuaro'); // => 'Parangaricutirimicuaro'

((arg0) => arguments[0])('Parangaricutirimicuaro'); // Error de ejecución


// Es un objeto muy parecido a un array, con llaves numéricas

(function(){ console.log(arguments)})('uno', 'uno', 'dos', 'tres', 'cinco');