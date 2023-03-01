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
