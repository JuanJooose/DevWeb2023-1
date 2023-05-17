import "./build/css/app.css"
import Widget from "./WidgetCasa";
import Separador from './Separador';
import Casa from "../clases/InfoCasas";

const Casas = [new Casa('California', 'Un caluroso lugar para que tengas una excelente estadia',1),
new Casa('Oregon', 'Una casa lista para tus actividades campestres, adentrandote en un bosque hermoso',2),
new Casa('Madrid', 'Apartamento de lujo para cumplir con todas tus necesidades cuando visites madrid',3),
new Casa('Andorra', 'Hogar para aquellas personas que quieren sentir una experiencia única rodeado de montañas',4),
new Casa('Grecia', 'Hermoso complejo con vista al mar para que pases unas excelentes vacacioenes',5),
new Casa('Mykonos', 'Un caluroso lugar para que tengas una excelente estadia',6),]


const Main = () => {
    return (
        <main>
            <section>
                <div className="section-image">
                    <section className="section-image-text">
                        <div className="contenedor">
                            <h2>Con nosotros siempre estarás cómodo</h2>
                        </div>
                    </section>
                </div>
                <Separador />
            </section>
            <section className="contenedor">
                <h2 className="text-header-widgets">
                    Para ti
                </h2>
                <div className="widgetss">
                    {Casas.map(x => {
                       return <Widget lugar={x.lugar} infoLugar={x.informacion} img = {x.img}/>
                    })}
                </div>
            </section>

        </main>
    );
}

export default Main;