class Animales {
    constructor(nombre, edad, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }


    Sonido() {
        return `Yo ${this.sonido}`;
    }

}



class Gatos extends Animales {
    constructor(nombre, edad, sonido, cazador) {
        super(nombre, edad, sonido);
        this.cazador = cazador;
    }
}


 /* Punto #1 */
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

/* Punto #2 */



