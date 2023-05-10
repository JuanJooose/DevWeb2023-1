import "./build/css/app.css"
import { useState } from "react";
import images from "../assets/Images"


const Widget = (props) => {
    const [lugar] = useState(props.lugar);
    const [infoLugar] = useState(props.infoLugar);

    return (
        <div className="contenedor">
            <div className="contenedor-imagen">
                <div>
                    <img src={images.img1}></img>
                </div>
                <div className="contenedor contenedor-imagen-informacion">
                    <h2>{lugar}</h2>
                    <p>
                        {infoLugar} 
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Widget