// Arrow functions o Fat Arrow functions

// función anónima
const no_nombre = function(){
    console.log("No tengo nombre");
}

const arrow_function = () => "tampoco tengo nombre";
console.log(arrow_function());

const cuadrado = (x) => x * x;

const cuadrado_old = function(x){
    return x * x;
}

console.log(cuadrado(5));

const saludar = (frase, a_quien) => {
    return frase + " " + a_quien;
}
console.log(saludar("Bitte", "Sofi"));

() => 0;

(x) => x * x;
x => x * x;

(x, y) => x * y;

(x, y) => {
    let z = x * x + y * y;
    return Math.sqrt(z);
}




