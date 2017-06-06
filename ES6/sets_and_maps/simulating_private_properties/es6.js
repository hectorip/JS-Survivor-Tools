console.log(`
#################################################
Simulando propiedades privadas con ES6
#################################################
`);

let Animal = (function(){
    let propiedades_privadas = new WeakMap();

    let Animal = function(patas){
        propiedades_privadas.set(this, {patas});
        // Si se destruye este objeto, el WeakMap no bloquea 
        // la limpieza de la memoria.
    }
    Animal.prototype.getPatas = function(){
        return propiedades_privadas.get(this).patas;
    };
    return Animal;
})();

let mi_perro = new Animal(3);
console.log(mi_perro.patas);
console.log(mi_perro.getPatas());