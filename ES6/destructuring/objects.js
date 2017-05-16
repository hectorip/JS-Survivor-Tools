// Destructurar (no sabemos si existe o existirá esa palabra en español)
// Es descomponer una estructura de datos en varias partes pequeñas

// Objetos
const http_response = {
    status: "200",
    response: { message: "Success" }
};
let { status, response } = http_response;

// (response => console.log(response))({ my_status, my_response } = http_response); // error

// (function(respuesta) {
//     console.log(respuesta);
// })({un_status, una_respuesta} = http_response); // error

function log(response){
    console.log(response);
}

log({status, response} = http_response); // funciona


// default en destructuring

const {un_status, una_respuesta, cabeceras = []} = http_response; // si es undefined o no existe, se usa el default