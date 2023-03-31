/*
Crear mínimo 2 modulos
 - Módulo #1
    Debe tener una clase que herede de otra
    Un objeto que dentro de sus propiedades tenga otro objeto.

 -  Módulo #2
     Importar la clase y el objeto.
     Arrow function que haga función de la clase y objeto importado.

 - Módulo Adicional (Oros adicionales)
    Arrow function que manipule arreglos con los metodos de lso arreglos y debe de tener como parámetros
    un array y un callback.
*/


import { CuentaAhorros, objetoPersona } from './module_base.js';
import { sumarNotas } from './module_childb.js';


const usoClassObject = (remitente, destinatario, valorTranferir) => {

    let Cuentas = [new CuentaAhorros("Juan José", 12123, 1, 20000),
    new CuentaAhorros("Carlos Andres", 12313, 2, 30000),
    new CuentaAhorros("Juan Manuel", 13123, 3, 30000)];

    let reply;


    let iCuentaR = null;
    for (let index = 0; index < Cuentas.length; index++) {
        if (Cuentas[index].numCuenta === remitente) {
            iCuentaR = index;
            break;
        }
    }

    let iCuentaD = null;
    for (let index = 0; index < Cuentas.length; index++) {
        if (Cuentas[index].numCuenta === destinatario) {
            iCuentaD = index;
            break;
        }
    }
    if (iCuentaD === null || iCuentaR === null) {
        reply = `No es posible hacer la transferencia`;
    }
    else {
        if (iCuentaD !== iCuentaR) {
            reply = Cuentas[iCuentaR].Transferir(Cuentas.filter(x => { return x.numCuenta === destinatario }), valorTranferir)
        }
    }


    for (let value in objetoPersona) {
        console.log(objetoPersona[value]);
    }

    return `\n\n${reply}\n${Cuentas[iCuentaR].verSaldo()}`;
}

console.log(usoClassObject(1, 2, 10000)); // se llama el arrow function para que haga transacciones a otras cuentas.


let numbers = [{name: 'nota 1',nota: 2},{name: 'nota 2',nota: 4},{name: 'nota 1',nota: 4},{name: 'nota 1',nota: 5}]

const functionWithModuleAdditional = (callback, arreglo) => {
    return callback(arreglo);
};


console.log(`\n\nLa nota del estudiante es: ${functionWithModuleAdditional(sumarNotas,numbers) / numbers.length}`);
