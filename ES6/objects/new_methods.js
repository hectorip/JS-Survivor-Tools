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
        return nombre + " " + apellido;
    }
}

Object.assign(direccion, datos_personales);
datos_personales = direccion.nombre; // se han copiado los valores
