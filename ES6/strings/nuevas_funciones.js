// Nuevas funciones
// Ahora hay soporte para caracteres Unicode duera del
// Basic Multilingual Plane (UTF-16)

let un_emoji = "😛";

// La función charAt() de las cadenas no funciona correctamente,
// no se reconoce como un sólo carácter válido.

console.log(un_emoji.charAt(0)); // ""
console.log(un_emoji.length); // 2 -- Lenght incorrecto
console.log(un_emoji.charAt(1)); // ""
