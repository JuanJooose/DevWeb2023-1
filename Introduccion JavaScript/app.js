"use strict";

let Clientes = [
];


// 
let vDos = 20;

// No se puede cambiar el valor de este tipo de variable.
// const mensaje = "20";

// Clientes[0] = Math.floor(Math.random() * 100);
// Clientes[1] = Math.floor(Math.random() * 100);


// /* Arrow Function */

// Clientes.map((c) => console.log(c));

// /* Comments */


// console.log(Clientes[0] + parseInt(mensaje));

// Clientes[2] = 20;

// console.log(Clientes[2] === mensaje);



console.log(`\n3 arrow funciton\n\n`);


const asignarValor = () => {
    for (let i = 0; i < 5; i++) {

        Clientes.push(Math.floor(Math.random() * 100 * i));
    }
}

asignarValor();

Clientes.forEach(c => {
    console.log(c)
});


const Dividir = num => {
    return num / 2;
}

console.log(`\nLa división es -> ${Dividir(10)}`)



/** */
const sumar = (numUno, numDos) => {
    return numDos + numUno;
}

console.log(`\nLa suma es -> ${sumar(15, 15)}`)


const darValor = lista => {

    lista.push(10);
}

darValor(Clientes);

Clientes.forEach(c => {
    console.log(c)
});




let Sumar = (number) => { return number + 5 }

let f = Sumar;


console.log("\n");
// Callback functions 


// se trata de enviarle como parametro de entrada a una función otra función

const esPar = (number) => {
    return number % 2 === 0;
}

console.log("Function con callback");
const ValidarParidad = (num, callback) => {
    const esPAR = callback(num);
    console.log(`¿El número es entero? ${esPAR}\n\n`)
}


ValidarParidad(4, esPar);



const valores = [1, 2, 3, 4, 5, 10, 20, 40];
let arreglo = [1, 2, 3, 4, 5, 10, 20, 40, 50];


const SumaValores = valores.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});


console.log("Reduce\n\n" + SumaValores);


/* Foreach */

console.log("\nForeach\n\n")
const fnDos = arreglo.forEach(number => {
    console.log(number);
});


console.log("\nFilter\n\n");
const fnTres = arreglo.filter(number => {
    return number > 10;
});
console.log(fnTres);


console.log("\nMap\n\n");
const fnCuatro = arreglo.map(number => {
    return `Jugador ${number} Se ha unido.`;
});
console.log(fnCuatro);





/* Tarea */

let Persona = (nombre, edad) = {
    Nombre: nombre,
    Edad: edad
}

listaPersonas = [Persona(juan, 18)]


const fnTry = listaPersonas.forEach(n => { return n.Nombre + " " + n.Edad });


console.log(fnTry);



