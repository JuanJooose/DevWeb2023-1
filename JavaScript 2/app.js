const persona = {
    primernombre: "Juan José",
    apellido: "Gil",
    edad: 19,
    documentoIdentidad: 5612,

    caracteristicas: {
        colorcabello: "Rojo",
        etnicidad: "Indio Europeo",
        idiomaMaterno: "Español"
    },

    saludar: function () {
        return `Hola ${this.primernombre} ${this.apellido}`
    }
};

// console.log(persona.saludar());


class PersonaP {

    constructor(primerNombreUsu, apellidoUsu) {
        this.primerNombreUsu = primerNombreUsu;
        this.apellidoUsu = apellidoUsu;

    }

    saludarPersona() {
        return `Hola ${this.primerNombreUsu} ${this.apellidoUsu}`
    }
}

// No podemos modificar el objeto
// const hombre = new PersonaP("Juan José", "Gil");
// console.log(hombre);
// console.log(hombre.saludarPersona());

// // Con el let podemos modificar el objeto
// let mujer = new PersonaP("Laura Bandida", "Pitt");
// console.log(mujer);
// console.log(mujer.saludarPersona());

// mujer.primerNombreUsu = "Isabelle";
// mujer.apellidoUsu = "Martinez";

// console.log(mujer);
// console.log(mujer.saludarPersona());

// Herencia

class Animales {
    constructor(nombre, edad, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }

    sonidoAnimal() {
        return `${this.nombre} tiene le sonido: ${this.sonido}`;
    }
}

class Gatos extends Animales {
    // Constructor de la clase Gatos
    constructor(nombre, edad, sonido, cazador) {
        super(nombre, edad, sonido);
        this.cazador = cazador;
    }

    maullar() {
        return `yo puedo hacer el sonido ${this.sonido}`;
    }
}

// Crear un animal, especificamente un gato 

let gato = new Gatos("Bigotes", 5, "Miauuu", true)

// console.log(gato);

/*  Tarea

    1. Crear un objeto que tenga minimo 2 metodos, ademas debe tener una propiedad que sea un objeto 
 
    2. crear una clase que herede de otra.
       debe poseer minimo 3 propiedades para el constructor.

    3. Crear una funcion tipo flecha que haga uso de la clase construida y el objeto declarado.
 */

/* Punto #1 */

console.log(`Punto #1\n`);
let Carro = {
    marca: "Tesla",
    modelo: "CyberTruck",
    caracteristicas: {
        motor: '150cv',
        año: '2024',
    },
    MostrarCaracteristicas: function () {
        return `Caracteristicas\n${this.caracteristicas.motor}\n${this.caracteristicas.año}`
    },
    VerTodaInformación: function () {
        return `El carro es\n${this.marca}\n${this.modelo}\n\n${this.MostrarCaracteristicas()}`
    }
}

console.log(`-----Primera Función\n${Carro.MostrarCaracteristicas()}`);
console.log(`-----Segunda Función\n${Carro.VerTodaInformación()}`);


// Punto #2
console.log(`\n\nPunto #2\n`);
class Persona {
    constructor(nombre, edad, documento) {
        this.nombre = nombre;
        this.edad = edad;
        this.documento = documento;
    }


    verInformacion() {
        return `Nombre: ${this.nombre}\nDocumento: ${this.documento}\nEdad: ${this.edad}`;
    }
}


class Estudiante extends Persona {
    constructor(nombre, edad, documento, universidad) {
        super(nombre, edad, documento);
        this.universidad = universidad;
    }


    verInformacion() {
        return `${super.verInformacion()}\nUniversidad: ${this.universidad}`;
    }
}

let Estudiante1 = new Estudiante(`Juan José Gil`, 19, 1018222, `Pascual bravo`);


console.log(Estudiante1.verInformacion());


console.log(`\n\nPunto #3`);

const UsoObjetoYClase = (function1, function2) => {
    return `${function1}\n${function2} `;
}

console.log(`Objeto y Clase\n ${UsoObjetoYClase(Carro.VerTodaInformación(),Estudiante1.verInformacion())}`);

