// Un scope o ámbito en JS el "espacio" en dónde un nombre
// existe, o tiene relacionado un valor.
// Un ámbito se crea cuando se corre una nueva función, cada función
// tiene su propio ámbito o scope. A partir de ahora le llamaremos scope.

// Cuando se intenta usar un valor definido en alguna variable
// que no se ha asignado en el scope, JS da un error de referencia
function ciudadanos_1(){
    console.log(ciudadano_kane); // Error, el nombre de variable no está asignado
}

ciudadanos_1(); // error

// Sin embargo, en JS las variables son "levantadas" (hoisting)
// lo que significa que su declaración (no asignación) se lleva
// al tope de su ámbito, lo cuál evita muchos errores de referencia.
function ciudadanos_2(){
    console.log(ciudadano_kane); // undefined, se ha declarado, pero no asignado
    var ciudadano_kane = "Kane";
}
ciudadanos_2(); // undefined

// Pero los scopes también pueden estar anidados. Si se declara algo fuera
// de una función, esto pertenece al scope global. Si una función no 
// encuentra algo en su scope, lo buscará en el scope superior, sucesivamente
// hasta llegar al scope global.

var jekyll = "Dr. Jekyll";

function ciudadanos_londres(){
    console.log(jekyll); // "Dr. Jekyll" - Toma del scope padre
}

ciudadanos_londres();

// Si una función declara una variable llamada igual que otra en un
// scope superior, la variable declarada eclipsará o hará sombra ("shadowing")
// de la del scope superior, por lo que su valor no será accesible.

function ciudadanos_ny(){
    // aquí es accesible variable `jekyll`, de un scope superior
    var jekyll = "Mr. Hide";
    console.log(jekyll); // "Mr. Hide", la variable superior no se toca,
                        // pero su valor no es accesible.
}

ciudadanos_ny(); //"Mr. Hide"
console.log(jekyll);





