// Aplicación parcial
// Consiste en devolver funciones con los argumentos disponibles,
// listas para recibir los argumentos que faltan

const mapWith = (fn) => (coleccion) => coleccion.map(fn)

const coleccionAlCuadrado = mapWith((x) => x * x)

coleccionAlCuadrado([1, 2, 3, 4, 5])