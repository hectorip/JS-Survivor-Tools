// Los nuevos tipos de asignación de valores
// se comportan difetente al var tradicional

// Acerca del `var`
// ES5
var my_variable = 7;
// A la declaración de variables hecha con var
// se le aplica el 'hoisting'. Esto quiere decir
// que la declaración (y sólo la declaración, no la 
// asignación), se lleva a la parte incial del 
// ámbito en que fué declarada.

if(true == false){
    var this_variable_should_not_exist = ":)";
}

console.log(this_variable_should_not_exist); // undefined -> existe, sin valor asignado

// Los nuevas declaraiones de vairables (bindings)
// tienen propiedades que permiten hacer más predecible el
// código.

// Let
// 1) No es elevada, su declaración se queda en el lugar
//    en que fue definida por el programador.

if(true == false){
    let this_variable_should_not_exist_2 = ":P";
}
console.log(this_variable_should_not_exist_2); // ReferenceError: this_variable_should_not_exist_2 is not defined


