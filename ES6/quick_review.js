

console.log(una_variable); // undefined

var una_variable = "Un valor";


console.log(otra_variable); // Error, no declarada
let otra_variable = "Otro valor";


const pi = 3.141592;
pi = 3.15 // Error no se puede re-asignar valor

const una_persona = {nombre: "Héctor"};
una_persona = {nombre: "Diego"}; // Error
una_persona.nombre = "Diego"; // Success ):(

for (let i = 0; i < 10; i++) {
    process(items[i]);
}
// No funcinona
for (const i = 0; i < 10; i++) {
    process(items[i]);
}


function imprimir_equipo_de_futbol(entrenador, ...equipo){
    console.log(`Entrenador ${entrenador}`);
    for(const jugador of equipo){
        console.log(`Jugador ${jugador}`);
    }
}

imprimir_equipo_de_futbol("Diego", "El llantas", "Julián", "La Rata");


function una_funcion(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return "Yei! Ya corrí";
}

let un_array = [1, 2, 3];

una_funcion(...un_array);


let pro = {nombre: "Walter White", pasion: "Metanfetaminas"};
const presentacion = `Me llamo ${pro.nombre}, y mi pasion es ${pro.pasion}`;
console.log(presentacion);

var text = "😬";
console.log(text.length);
console.log(/^.$/.test(text));
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));

console.log(/^.$/u.test(text));



let PersonClass = class {
    // equivalente del constructor PersonType
    constructor(name) {
        this.name = name;
    }
    // equivalente de PersonType.prototype.sayName
    sayName() { 
        console.log(this.name);
    }
};
let person = new PersonClass("Héctor");

person.sayName(); // outputs "Héctor"
console.log(person instanceof PersonClass);
console.log(person instanceof Object);
console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName); // "function"



() => 0; // Función que on recibe nada y devuelve 0;
x => x * x;
(x) => x * x; // Función que recibe un argumento y lo devulve multiplicado

(x, y) => x + y;

(nombre, apellido) => {
    return `${nombre} ${apellido}`;
}

 

