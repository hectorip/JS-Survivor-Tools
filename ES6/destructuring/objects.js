// Destructurar (no sabemos si existe o existirá esa palabra en español)
// Es descomponer una estructura de datos en varias partes pequeñas

// Objetos
const http_response = {
    status: "200",
    response: { message: "Success" }
};
let { status, response } = http_response;

// (response => console.log(response))({ status, response } = http_response); // error

// (function(respuesta) {
//     console.log(respuesta);
// })({status, response} = http_response); // error

function log(response){
    console.log(response);
}

log({status, response} = http_response); // funciona, el destructuring evalua al valor del lado derecho


// default en destructuring

const {un_status, una_respuesta, cabeceras = []} = http_response; // si es undefined o no existe, se usa el default

// Usando nombres de variables diferentes

const bad_reponse = {
    status: 500,
    message: "Server Timed Out"
}

let { status: bad_status, message: bad_message } = bad_reponse;
console.log(bad_status); // 500
console.log(bad_message);// "Server Timed Out"

// Defauls en cambio de nombre de variables

let {headers: bad_headers = "No headers"} = bad_response;
console.log(bad_headers); // No headers






