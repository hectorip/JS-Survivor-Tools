// Nuevos métodos agregados a objetos

// Object.setPrototypeOf


let animal = {
    hacerSonido(){
        console.log("Criiiiiiii");
    }
};

let perro = {
    hacerSonido(){
        console.log("Gua Gua!!!!");
    }
}
let mi_perro = Object.create(animal); // mi_perro hereda de animal

Object.setPrototypeOf(mi_perro, perro);
mi_perro.hacerSonido();

// Copia de valores (patrón mixin)

let direccion = {
    calle: "General Antonio León",
    numero: "65",
    direccion_completa(){
        return `#{this.calle} ##{this.numero}`;
    }
}
let  datos_personales = {
    nombre: "Héctor",
    apellido: "Patricio",
    get nombre_completo(){
        return this.nombre + " " + this.apellido;
    }
}

Object.assign(direccion, datos_personales);
console.log(direccion.nombre); // se han copiado los valores
console.log(direccion.nombre_completo);
direccion.nombre = "Iván";
console.log(direccion.nombre_completo);
// los accesores no se copian como métodos, sino se copia el valor que
// el accesor devuelva al momento de la asignación

// Object.is
// ES5
console.log(NaN === NaN); // falso
console.log(0 === -0); // true, pero son diferentes


// ES6
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));





