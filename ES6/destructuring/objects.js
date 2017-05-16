// Destructurar (no sabemos si existe o existirá esa palabra en español)
// Es descomponer una estructura de datos en varias partes pequeñas

// Objetos
const http_response = {
    status: "200",
    response: { message: "Success" }
};
const { status, response } = http_response;