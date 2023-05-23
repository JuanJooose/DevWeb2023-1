class Casa {
    constructor(lugar,informacion,img,id)
    {
        this.id = id;
        this.lugar = lugar;
        this.informacion = informacion;
        this.img = img;
    }
}
 
const Casas = [new Casa(1,'California', 'Un caluroso lugar para que tengas una excelente estadia',1),
new Casa(2,'Oregon', 'Una casa lista para tus actividades campestres, adentrandote en un bosque hermoso',2),
new Casa(3,'Madrid', 'Apartamento de lujo para cumplir con todas tus necesidades cuando visites madrid',3),
new Casa(4,'Andorra', 'Hogar para aquellas personas que quieren sentir una experiencia única rodeado de montañas',4),
new Casa(5,'Grecia', 'Hermoso complejo con vista al mar para que pases unas excelentes vacacioenes',5),
new Casa(6,'Mykonos', 'Un caluroso lugar para que tengas una excelente estadia',6),]





export default Casas;