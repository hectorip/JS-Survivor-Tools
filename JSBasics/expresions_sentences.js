// IIFE -> Immediately Invoked Function Expresion
// Expreseiones vs Sentencias
// {
//     hola: 56,
//     uno: function(){ console.log("UNO");}
// }
var hola = 56; // Sentencia
56; // Expresión
"hola"; // Expresión
56 + 2; // Expresión

function uno(){
    console.log("UNO");
} // Sentencia

uno();

(function dos(){
    console.log("DOS");
});
//dos();

// Funcinoes como expresiones no crean bindings en el scope
// aunque tengan nombre.
var tres = function dos(){ console.log("DOS");}
tres();

(function(){
    console.log("Hola soy una IIFE");
})();

(function(){
    width = "hola mama"
    return function(){
        console.log("hola");
    }
})();











