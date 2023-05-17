import "./build/css/app.css"
import { useState } from "react";
import Images from "../assets/Images"


const Widget = (props) => {
    const [lugar] = useState(props.lugar);
    const [infoLugar] = useState(props.infoLugar);
    const [img] = useState(props.img);
    return (
        <div className="contenedor">
            <div className="contenedor-imagen">
                <div className="image-casa">
                    <img src={Images['img' + img]}></img>
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