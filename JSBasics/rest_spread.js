// Rest y Spread
// ...
// ES5
function equipo_de_futbol(entrenador, capitan, jugadores){
    console.log("El entrenador es " + entrenador);
    console.log("El capitán es " + capitan);
    console.log("Jugadores: ");
    for(jugador of jugadores){
        console.log(jugador);
    }
}

equipo_de_futbol("Carlos Jorge", "Jorge Carlos", ["La rata", "Julián", "Héctor"]);

function equipo_de_futbol_six(entrenador, capitan, ...jugadores){
    console.log("El entrenador es " + entrenador);
    console.log("El capitán es " + capitan);
    console.log("Jugadores: ");
    for(jugador of jugadores){
        console.log(jugador);
    }
}
equipo_de_futbol_six("Carlos Jorge", "Jorge Carlos", "La rata", "Julián", "Héctor", "Grecia", "Daphne");

function promedio(a, b, c){
    console.log(arguments);
    console.log("\nPremedio: ");
    console.log((a + b + c ) / 3);
}
let data_set = [2, 3, 4, 5, 6, 7];
// promedio(data_set[0], data_set[1], data_set[2]);
promedio(...data_set);






