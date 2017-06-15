// Ejercicio:
// Contesta las siguientes preguntas después de leer el código.

var nombre = "Snowden";

(function(nombre){
  alert("El mejor filtrador es: " + nombre); // 1) ¿Qué resultado da? ¿Puedes explicarlo?
})("Assange"); // 2) ¿Cómo se llama esta forma de estructura programación? ¿Para qué sirve? 

function filtrar(){
  filtracion_index = Math.floor(Math.random() * this.filtraciones.length);
  alert(this.filtraciones[filtracion_index])
} // 3) ¿Esta función, funcionaría en llamándola en este contexto? ¿Por qué?

var Filtrador = function (nombre, filtraciones) {
  this.nombre = nombre;
  this.filtraciones = filtraciones;
  this.filtrar = filtrar; // 4) ¿Es corrector hacer esto? ¿Hay otra forma mejor de hacerlo?
  this.negar_filtraciones = function(){
    this.filtraciones.forEach(function(e){
        console.log("Yo " + this.name + " no filtré: " + e); // 5) ¿Cuál es el resultado? ¿Por qué? ¿Cómo lo reolvemos?
    });
    } // 6) ¿Es correcto hacer esto?
} 


var assange = new Filtrador("assange", ["wikileaks", "wikileaks reloaded", "wikileaks revolutions"]);
assange.filtrar();
assange.negar_filtraciones();