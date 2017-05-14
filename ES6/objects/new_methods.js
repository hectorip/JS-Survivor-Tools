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
let mi_perro = Object.create(animal);

Object.setPrototypeOf(mi_perro, perro);
mi_perro.hacerSonido();
