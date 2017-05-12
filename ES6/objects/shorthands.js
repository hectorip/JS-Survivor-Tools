// Shorthand en sitaxis de objetos literales


let nombre = "Hemholtz", clase =  "A";
// ES5
var persona = {
    nombre: nombre,
    clase: clase
}

// ES6
const persona_es6 = {
    nombre,
    clase
} // cuando la clave se llama igual que la variable, basta con escribir el nombre de la variable

// Métodos concisos

var trabajador = {
    nombre: nombre,
    trabajar: function(){
        console.log(this.nombre + " comenzó a trabajar");
    }
}

const trabajador_six = {
    nombre,
    trabajar(){
        console.log(`${ this.nombre } comenzó a trabajar`);
    }
} // las funciones pueden ser declaradas sin la palabra clave 'function' dentro del objeto