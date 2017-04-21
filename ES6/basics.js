// Arrow functions

// función que no recibe argumentos y devuelve 0
() => 0; // Si es una expresión que representa un valor se devuelve automáticamente.
(() => 0)(); // IIFE => Immediately Invoked Function Expression

(() => {
    return 0;
}); // Arrow function con cuerpo de bloque, hay que ser explícitos en el valor que se regresa.

((multiplicador) => (factor) => multiplicador * factor)(2)(5) // 10
