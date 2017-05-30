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
mis_nakamas.has(tercer_nakama);
tercer_nakama = null; // pierde la referencia

// No hay manera de comprobar que se borró algo de un weak set si no se tiene
// una referencia externa, como otra variable, pero eso
// propiciaría que no se le aplicara garbage collection