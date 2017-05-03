// Ámbitos o Scopes
// Bind - enlazar o conectar / asingar
// Store - not

var edad = 56; // el nombre de variable edad, está asignado al valor 56.
var n_perritos = 56; // se copia el valor

n_perritos = edad;

edad = 56 + 56;
console.log(edad);
console.log(n_perritos);

////////////////////////////////////////////////////
var grupo = ['Dafne', 'Carlos']; // arrays y objetos son valores de referencia
var personas = grupo; // se asigna a la misma dirección de memoria o Referencia

personas.push("Julián");
console.log(grupo);

///////////////////////////////////////////////////
var persona = {nombre: "Sofi", profesion: "coder"};
var sofi = persona; // es la misma referencia.

sofi.nombre = "Otra cosa";

sofi = { nombre: "Rivas", profesion: "diseñadora" };
console.log(persona);














