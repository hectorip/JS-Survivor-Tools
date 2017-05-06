// Generators
// pausar una función en cierto punto y continuarla después


function *numeros(){
    console.log('Corriendo función')
    yield 1;
    yield 2;
    yield 3;
}

let mis_numeros = numeros();
console.log(mis_numeros.next());
console.log(mis_numeros.next());
console.log(mis_numeros.next());
console.log(mis_numeros.next());