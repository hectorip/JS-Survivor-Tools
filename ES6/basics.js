// Arrow functions

// función que no recibe argumentos y devuelve 0
() => 0; // Si es una expresión que representa un valor se devuelve automáticamente.
(() => 0)(); // IIFE => Immediately Invoked Function Expression

(() => {
    return 0;
}); // Arrow function con cuerpo de bloque, hay que ser explícitos en el valor que se regresa.

((multiplicador) => (factor) => multiplicador * factor)(2)(5) // 10

// Shadowing variables

((multiplicador) => 
    (factor) => 
        (multiplicador) =>
            multiplicador * factor)(2)(3)(4) // ¿Qué multiplicador se toma en cuenta? El primero o el segundo?

// 12 => La segunda variable multiplicador "eclipsa" la que está en el scope superior

((x) =>
    (y) => x)(2)(4) // Combinador K, útil por los efectos secundarios