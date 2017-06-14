// Iterators

console.log(`
#################################################
Iteradores y Generadores

Un iterador es un objeto que sirve como colección
y tiene un método next() y devuelve un mapa con 
las llaves 'value' y 'done' cada vez que es
llamado.

La llave 'value' contiene el valor de el elemento
devuelto y 'done' un valor booleano indicando si
el iterador ha terminado. Cuando no quedan más
valores qu devolver, 'done' es true.

Un Generador es una función que devulve un
iterador al ser llamada. Para hacer un generador
hay que poner un asterisco(*) antes del nombre de
la función. Para devolver el valor en cada
iteración, se usa la nueva palabra clave 'yield'.
#################################################
`);

// El asterisco indica que es un iterador
function *iteradorDeBuendias(){
    yield "Jose Arcadio Buendía"; // la fucnión se "pausa" tras cada next()
    yield "Arcadio Buendía";
    yield "Jose Arcadio Segundo Buendía";
    yield "Arcadio José Buendía";
}

let los_arcadios = iteradorDeBuendias();
console.log(los_arcadios.next());
console.log(los_arcadios.next());
console.log(los_arcadios.next());
console.log(los_arcadios.next());
console.log(los_arcadios.next()); // done


console.log(`
#################################################
Coleeciones Iterables
Las coleeciones en ES6 son iterables(array, map y
set), porque poseen una función generador, en la 
llave con el símbolo conocido Symbol.iterator.

Para crear nuestras propios objetos iterables hay
que crear esta misma propiedad.
#################################################
`);

let numeros_primos = [1, 2, 3, 5, 7, 11];
let iterador = numeros_primos[Symbol.iterator]();
console.log(iterador.next()); // {value: 1, done: false}
console.log(iterador.next()); // {value: 2, done: false}
console.log(iterador.next()); // {value: 3, done: false}




