import React from "react";
import "./build/css/app.css"
import Widget from "./WidgetCasa";
import Separador from './Separador';
import Casa from "../clases/InfoCasas";




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
                    {Casa.map(x => {
                        return <Widget lugar={x.lugar} infoLugar={x.informacion} img={x.id} valor={x.valor} />
                    })}
                </div>
            </section>

        </main>
    );
}

export default Main;