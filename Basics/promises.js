// Promise
// Assurance that an operation will be made

// Callbacks
// let boton = document.querySlector("#el-boton");
 
let una_promesa = new Promise(function(resolve, reject){
    console.log("corriendo promesa, bootsraper");
    setTimeout(function() { resolve("YESS")}, 2000);
});
una_promesa.then(function(val){
    console.log("promesa ejecutada: " + val);
});

console.log("Esto está después de la promesa");