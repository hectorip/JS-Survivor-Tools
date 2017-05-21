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
// setCookie("unaCookie", "no-lo-se"); // errror

function setCookieWithDefaults(name, value, {
    lifetime=6000,
    path="/",
    secure=true}={}){
    // Esta función tiene default por si no mandan el argumento
    // Y default si el argumento envíado no tiene todos los valores
    console.log(lifetime);
    console.log(path);
    console.log(secure);
}

console.log(`
###########################################################
Destructuring en argumentos, con default
###########################################################
`);
setCookieWithDefaults("my-cookie", ":P");
setCookieWithDefaults("my-cookie", ":P", {lifetime: 9000, path: "/a_path", secure: false});
