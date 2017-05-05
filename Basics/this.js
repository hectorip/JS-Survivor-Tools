// palabra clave this ()

function what_is_this(){
    console.log(this);
}

function this_anidated(){
    return (function(){
        return this;
    });
}

// what_is_this();
// console.log(this_anidated()());

let Persona = function(nombre){
    this.nombre = nombre;
}
Persona.prototype.whatIsThis = what_is_this;

let hector = new Persona("Hector");
hector.whatIsThis();