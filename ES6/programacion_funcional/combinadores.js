// Cobinadores, como se enseñan en Javascript Allongé
// Un combinador es una función que sólo usa funciones ya definidas,
// para producir un resultado, o devuelve una nueva función.

// Combinador K
((x) => (y) => x )(5) // => Devuelve el mismo valor después de ejecutar una función, útil por sus efectos secundarios

// Combinador I
((x) => x)