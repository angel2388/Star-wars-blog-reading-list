import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Persona = (props) => {
    const params = useParams();
    const [detalle, modificarDetalle] = useState({});
    const [cargando, modificarCargando] = useState(true);

    useEffect(async () => {
        const res = await fetch(`https://www.swapi.tech/api/people/${params.uid}`)
        const data = await res.json();
        console.log({detalle: data});
        modificarDetalle(data.result);
        modificarCargando(false);
    }, [])

    if (cargando) {
        return <div>La info esta cargando...</div>;
    }
    
    return (
        <div>
         name: {detalle.properties.name};
         terrain: {detalle.properties.terrain};
        </div>
    );
    
};

export default Persona;