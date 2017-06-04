console.log(`
#################################################
Simulando propiedades privadas a la manera de ES5
#################################################
`);


var Carro = function(){
    var _id = 0, propiedades_privadas = {};

    var Carro = function(modelo){
        this._id = _id++; // esto debería ser no modificable
        propiedades_privadas[this._id] = {modelo: modelo};
    }
    Carro.prototype.getModelo = function(){
        return propiedades_privadas[this._id].modelo;
    }
    return Carro;
}(); // Aislamiento del contexto


var ford = new Carro("Focus");
console.log(ford.modelo); // no functiona : undefined
console.log(ford.getModelo());