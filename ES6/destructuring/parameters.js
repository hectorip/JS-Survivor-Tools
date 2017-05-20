// Destructuring como parámetros

console.log(`
#################################################
Destructuring usada en declaración de funciones
#################################################
`);

function setCookie(name, value, {lifetime, path, secure}){
    // lifetime, path, scure existen como parámetros aquí
    console.log(lifetime);
    console.log(path);
    console.log(secure);
}

