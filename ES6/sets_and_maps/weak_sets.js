console.log(`
#################################################
Weak Sets
Creados para evitar fugas de memoria al evitar
que los objetos sean eliminados por el recolector
de basura.

Sólo aceptan objetos.
#################################################
`);

let mis_nakamas = new WeakSet([{nombre: "Luffy"}, {nombre: "Zoro"}]);
let tercer_nakama = {nombre: "Usopp"};

mis_nakamas = mis_nakamas.add(tercer_nakama);
console.log(mis_nakamas.has(tercer_nakama));
console.log(mis_nakamas);
tercer_nakama = null; // se borra la única referencia fuerte, por lo que ahora tampoco existe en el array


// No hay manera de comprobar que se borró algo de un weak set si no se tiene
// una referencia externa, como otra variable, pero eso
// propiciaría que no se le aplicara garbage collection

// No tiene método size()

// mis_nakamas.size(); // falla miserablemente
// tampoco tienen keys() o values()
// no método forEach()

// En pocas palabras, sólo sirve para tener una colección de objetos si repetirse,
// sin tener fugas de memoria por no poder eliminar un objeto sin referencias fuertes

