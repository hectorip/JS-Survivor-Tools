console.log(`
#################################################
Weak Sets
Creados para evitar fugas de memoria al evitar
que los objetos sean eliminados por el recolector
de basura.

Sólo aceptan objetos.
#################################################
`);

let mis_nakamas = new WeakSet([{nombre: "Luffy"}, {nombre: "Zoro"} ])