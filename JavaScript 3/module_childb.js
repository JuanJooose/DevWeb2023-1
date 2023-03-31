/*  Módulo Adicional (Oros adicionales) */
export const sumarNotas = arreglo => {
    return arreglo.reduce((total, notas) => {
         total += notas.nota;
         return total;
    },0)
}


