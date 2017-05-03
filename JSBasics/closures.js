// Closure o Cerrraduras
// Un scope que se conserva aún cuando la función haya terminado de ejecutarse

function multiplicador(n){
    // {n: 2}
    return function(m){
        // {m: ?}, {n: 2}
        return n * m;
    }
}

var duplicar = multiplicador(2);
console.log(duplicar(5));
console.log(duplicar(10));
console.log(duplicar(20));

var triplicar = multiplicador(3);


function crear_saludo(saludo){
    return function(a_quien){
        console.log(saludo + " " + a_quien);
    }
}

var hello = crear_saludo("Hello");
hello("Dafne");

var hi = crear_saludo("Hi");
hi("Carlos");
///////////////////////////////////////////////////

function calculadora_impuestos(tasa){
    return function(valor){
        return (1 + tasa) * valor;
    }
}

var iva = calculadora_impuestos(.16);
console.log(iva(100));













