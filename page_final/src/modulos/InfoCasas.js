import "./build/css/app.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Casas from "../clases/InfoCasas";

const InfoCasas = (props) => {
    const[idcasa] = useState(props.id)

    useEffect(() => {
        const datos = Casas.filter(x => {
            return x.id === idcasa;
        })
    })
    return (
        <div>
            <div>
                <img src={Images['img' + datos.img]}></img>
            </div>
            <h2>{datos.lugar}</h2>
            <p>{datos.infoLugar}</p>
        </div>
    )
 }



export default InfoCasas;