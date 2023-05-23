import "./build/css/app.css"
import Images from "../assets/Images"
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
                    {/* <Link to={'/InfoCasas'}>
                       <a>mas:::</a>
                    </Link> */}
                </div>

            </div>
        </div>
    );
}

export default Widget