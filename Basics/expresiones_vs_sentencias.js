// En JS, y en muchos otros lenguajes, una expresión y una sentencia
// se comportan diferente. Un ejemplo es la declaración de funciones
// dentro como sentencia o como expresión.

// Declaración como sentencia
// Crea un binding o asignación del nombre "saludar"
// a la función.

function saludar(){
    console.log("holi");
} // se pude usar como (saludar());

saludar();
// Declaración como expresión
// No crea una asignación del nombre de la función. 

(function saludar_olvidada(){
    console.log("HOliiii");
});
// no se puede usar, a menos que se guarde en una variable, 
// todo lo que se usa entre paréntesis se considera una expresión.
//saludar_olvidada(); // Error