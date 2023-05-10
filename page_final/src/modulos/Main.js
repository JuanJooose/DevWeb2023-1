import "./build/css/app.css"
import Widget from "./WidgetCasa";
import Separador from './Separador';

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
                    <Widget lugar="California" infoLugar="Un caluroso lugar para que tengas una excelente estadia" />
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </section>

        </main>
    );
}

export default Main;