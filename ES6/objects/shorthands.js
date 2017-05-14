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

// Nombres de propiedades calcualados

// ES5 
var celular = {
    marca: "Apple"
}, modelo_key = "modelo";

celular[modelo] = "iPhone"; // la única forma de usar nombres de propiedad calculados era sobre
//objetos ya construidos

// Error
var modelo_key = "modelo",
    celular = {
        marca: "HTC",
        modelo_key: "M8" // quiero el nomnre de propiedad "modelo", no modelo_key
    }


// ES6

let modelo_key_six = "modelo", celular_six = {
    marca: "Sony",
    [modelo_key_six]: "Xperia" // las llaves me permiten usar propiedades calculadas en la declaración literal de objetos
}
