// Desxtructuración mezclada
// La destructuración entre objetos y arrays se puede mezclar
console.log(`
############################################
Destructuración mezclada
############################################
`);

let heroe = {
    nombre: "Luffy",
    habilidad: "Gomu Gomu",
    amigos: [
        "Zoro",
        "Sanji",
        "Ussopp"
    ]
}

let { nombre, amigos: [primer_amigo], descripcion = "Héroe desconocido" } = heroe;

console.log(nombre); // Luffy
console.log(primer_amigo); // Luffy
console.log(descripcion); // Héroe desconocido
