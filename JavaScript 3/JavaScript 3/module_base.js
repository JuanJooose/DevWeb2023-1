class Cuenta {
    constructor(nombrePortador, documento, numCuenta, saldo) {
        this.nombrePortador = nombrePortador;
        this.documento = documento;
        this.numCuenta = numCuenta;
        this.saldo = saldo;
    }

    InformacionGeneral() {
        return `Portador: ${this.nombrePortador}\nDocumento: ${this.documento}\nNúmero de cuenta: ${this.numCuenta}\nSaldo: ${this.saldo}`;
    }

    verSaldo() {
        return `Usted ${this.nombrePortador} tiene un saldo de ${this.saldo}$`;
    }

    Transferir(Cuenta, valorEnviar) {
        if (this.saldo < valorEnviar) {
            return `No es posible hacer la transferencia. Saldo insuficiente.`; 
        }
        else {
            this.saldo -= valorEnviar;
            Cuenta.saldo += valorEnviar;
            return `Transferencia exitosa`;
        }
    }
}



export class CuentaAhorros extends Cuenta {
    constructor(nombrePortador, documento, numCuenta, saldo) {
        super(nombrePortador, documento, numCuenta, saldo);
        this.movimientos = 0;
    }
    InformacionGeneral() {
        return super.InformacionGeneral() + `\nMovimientos: ${this.movimientos}`;
    }

    verSaldo() {
        return super.verSaldo();
    }

    Transferir(Cuenta, valorEnviar) {
        this.movimientos++;
        return super.Transferir(Cuenta, valorEnviar);
    }
}


export const objetoPersona = {
    name: 'Juan José',
    documento: 1018,
    edad: 18,
    gustos: {
        deporte: 'Basket',
        comida: 'Hamburguesa',
        marcaRopa: 'Adidas',
    },
    altura: 1.85,
}



/* 


*/