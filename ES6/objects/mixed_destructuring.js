// Desxtructuración mezclada
// La destructuración entre objetos y arrays se puede mezclar

let heroe = {
    nombre: "Luffy",
    habilidad: "Gomu Gomu",
    amigos: [
        "Zoro",
        "Sanji",
        "Ussopp"
    ]
}

let {nombre, amigos: [primer_amigo]} = heroe;