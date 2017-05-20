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

setCookie("unaCookie", "no-lo-se", {6000, "/", true});
//setCookie("unaCookie", "no-lo-se"); // errror

