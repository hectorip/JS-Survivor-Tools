// Scope
// Es el lugar donde se guardan los bindings
// {c1: "Kane", c4: "Brown"};


var c1 = "Kane";
// var c3; efecto del hoisting

console.log(c1); // Left side lookup // Right side lookup
// console.log(c2);

console.log(c3);
var c3 = "Jekyll"; // hoisting, levantada
console.log(c3);

function ciudadanos_londres() {
    // scope: {c3: "Hide"}
    console.log("Ciudadanos Londres: ");
    var c3 = "Hide"; // Shadowing
    c4 = "Brown";
    console.log(c3);
}
ciudadanos_londres();
console.log(c4);





