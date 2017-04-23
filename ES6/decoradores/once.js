// Once
// Se aseugra de que una función sea ejecutada sólo una vez

const one = function(fn){
    let done = false;
    return function(){
        return done ? undefined : (fn.apply(this, arguments))
    }
}