// this
// Se refiere al scope en el que la función EJECUTANDO

function que_es_this(){
    console.log(this);
}

//que_es_this(); // imprime el entorno global

const Persona = function(nombre){
    this.nombre = nombre;
}

Persona.prototype.que_es_this = que_es_this;


Persona.prototype.decir_nombre = function(){
    return function(){
        console.log(this.nombre);
    }.bind(this);
}

Persona.prototype.decir_nombre_dueno = function(){
    return () => console.log(this.nombre);
}

let hector = new Persona("Héctor");
// hector.que_es_this();
let nombre_hector = hector.decir_nombre_dueno();
nombre_hector();


