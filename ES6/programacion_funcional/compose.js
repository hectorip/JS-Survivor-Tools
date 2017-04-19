// Composición de funciones
// Las funciones que se pueden usar en composición son útiles para crear nuevas abstracciones

const a = function(x){ return x + 1 };
const b = function(x){ return x * 2 };
const c = function(x){ return b(a(x))}; // c es una función que compone b y a

// Equivalencia en arrow functions
const sumarUno = (x) => x + 1
const duplicar = (x) => x * 2

const duplicarYSumarUno = (x) => sumarUno(duplicar(x))
duplicarYSumarUno(2) // => 5