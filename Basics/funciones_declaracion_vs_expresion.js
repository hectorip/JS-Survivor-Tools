// Diferencia entre declaración de funciones y expresión de función

// Esta es una declaración de función
// Es "levantada" se comporta como si hubiera sido declarada
// al principio del archivo siempre. 
function hacerAlgo(){
    console.log("Esta función hace algo.");
}

// No hace un binding de nombre de función a menos que se cree
// una variable que la contenga, y no es "levantada" (hoisted)
const hacerOtraCosa = function hacerEsaOtraCosa(){
    console.log("Esta función hace otra cosa");
}

// hacerEsaOtraCosa() => Error: la función no existe.
