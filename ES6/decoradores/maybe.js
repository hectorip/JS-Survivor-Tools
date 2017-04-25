// Decorador Maybe
// Ejecuta una función si tiene un valor diferente de nulo
// o vacío, si no, devuelve vacío.

const maybe = function(fn){
    return function(value){
        value != undefined || value != null ? fn(value) : null;
    }
}