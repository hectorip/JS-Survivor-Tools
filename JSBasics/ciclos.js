let g = ["Carlos", "Sofi", "Dafne"];

for(const i in g){
    console.log("Hola " + g[i]);
}

for(const persona of g){
    console.log("Hola " + persona);
}

for(let i = 0; i < g.length; i++){
    console.log("Hola " + g[i]);
}


let personas = [
    {nombre: "Carlos", edad: 26},
    {nombre: "Dafne", edad: 20},
    {"primer nombre": "Sofi", edad: 20},
]

for(let p of personas){
    console.log(p["primer nombre"]);
    console.log(p.nombre);
}


function saludar(p, iex){
    console.log("Hola " + p.nombre);
}
personas.forEach(saludar);







