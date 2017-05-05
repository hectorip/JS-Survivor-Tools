// arguments


function promedio(a, b, c){
    'use strict';
    console.log(arguments); // contiene todos los argumentos que se le mandaron
    console.log(arguments[0] == a);
    a = 7;
    console.log(arguments[0] == a);
}

promedio(2, 3, 4, 9, 10 , 11, 50, 100);