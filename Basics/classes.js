class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    set nombre_completo(nombre_completo){
        let [nombre, apellido] = nombre_completo.split(" ");
        this.nombre = nombre;
        this.apellido = apellido;
        // this.nombre_completo = nombre_completo;
    }

    get nombre_completo(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let hector = new Persona("hector", "patricio", 27);
console.log(hector.nombre_completo);
hector.nombre_completo = "ivan moreno";
console.log(hector.nombre_completo;