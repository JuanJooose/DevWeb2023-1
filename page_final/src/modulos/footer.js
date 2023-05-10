import "./build/css/app.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="contenido-footer">
                    <div>
                        <h3>
                            Contacto
                        </h3>
                        <p>
                          USA  +1 8000 002002
                        </p>
                        <p>
                          EU  +1 8000 002002
                        </p>
                        <p>
                          ASIA  +1 8000 002302
                        </p>
                        <p>
                          AFRICA +1 8000 002402
                        </p>
                    </div>
                    <div>
                        <a href="#">Q&A</a>
                        <p>Tu lo deseas, nosotros te reservamos</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;