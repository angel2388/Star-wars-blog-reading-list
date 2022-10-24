import React, {useContext} from "react";

import {Context} from "../store/appContext";

const Favoritos = (props) => {
    const {store, actions} = useContext(Context);
    return (
        <div>
            hola
            {store.favoritos.map((favoritos) => (
                <div> nombre: {favoritos.nombre}</div>
            ))}
            <button onClick={() => actions.agregarFavoritos("Angel")}>Agregar</button>
        </div>
    );
};

export default Favoritos;