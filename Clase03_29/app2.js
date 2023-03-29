import { sumar } from "./app.js";

const saludar = (nombre) => {
    return `${nombre} tiene ${sumar(3,2)}`
}


console.log(saludar('Juan José'));



/*
Crear mínimo 2 modulos

 - Módulo #1

  Debe tener una clase que herede de otra
  Un objeto que dentro de sus propiedades tenga otro objeto.

 - Módulo #2

   Importar de la clase y el objeto.
   Arrow function que haga función de de la clase y objeto importado.


 - Módulo Adicional (Oros adicionales)
   
   Arrow function que manipule arreglos con los metodos arreglos  y debe de tener como parámetros
   un array y un callback.

*/ 