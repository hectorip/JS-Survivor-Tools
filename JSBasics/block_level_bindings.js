// Block level bindings
// let y const

// Bloque: cualquier cosa que esté entre llaves(excepto objetos).

function c_inglaterra(cond){
    // var jekyll; hoisting
    if(cond){
        var jekyll = "Dr. Jekyll";
    }
    console.log(jekyll);
}
c_inglaterra(true); // "Dr. Jekyll"
c_inglaterra(false); // undefined

function c_espana(cond){
    let quijote = "HDQ";
    if(cond){
        //console.log(quijote); // Temporal Dead Zone
        const quijote = "Hidalgo Don Quijote"; // No sifre hoisting
    }
    console.log(quijote);
}

c_espana(true); // Reference error
c_espana(false); // Reference error

const personaje = { nombre: "Renata", pelicula: "Amar te duele" }
personaje.nombre = "Sofi";
personaje.actor = "Ximena";
//personaje = { nombre: "Sofi", pelicula: "Dos quijotes y un console.log" }
console.log(personaje)

// Usar const
// Usar let, cuando estamos seguros de re-asignación
// Usar var cuando no quede de otra

let numeros = [1, 2, 3, 4, 5];
for(const n of numeros){
    console.log(n);
}
//console.log(n); // 5

let f = [] 


for(let i = 0; i < 10; i++){
    f.push(function() {console.log(i)});
}
f[0]();
f[1]();
f[2]();







// Let no permite re declarar varibles
 


