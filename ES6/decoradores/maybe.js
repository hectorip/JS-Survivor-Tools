// Decorador Maybe
// Ejecuta una función si tiene un valor diferente de nulo
// o vacío, si no, devuelve vacío.

const maybe = function(fn){
    return function(...args){
        if(!args.length){
            return;
        }
        for (let arg of args){
            if(arg == null) return;
        }
        return fn.apply(this, args);
    }
}