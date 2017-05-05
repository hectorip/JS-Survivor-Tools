// Unicode
// Sistema de codificación de caracteres que lo busca es represantar cada carácter
// existente con un numero

// a = 1234 // charCode
// b = 1235
// é = 120929

// =====
// UTF-8 = codePoint = 8 bits para cada caracter
// UTF-16 = codePoint = 16 bits para cada caracter //
// UTF-16 surrogate pairs = parae de codepints codificados de manera especial para representar un solo carácter.

let my_emoji = "😡";
console.log(my_emoji.length);
console.log(my_emoji.charAt(0));
console.log(my_emoji.charAt(1));
console.log(my_emoji.charCodeAt(0));
console.log(my_emoji.charCodeAt(1));

console.log(my_emoji.codePointAt(0));
// console.log(my_emoji.codePointAt(1));

console.log("Æ".normalize() == "AE".normalize());
console.log("Æ".normalize());
console.log("AE".normalize());
console.log("hola ".repeat(10));
// normalize();