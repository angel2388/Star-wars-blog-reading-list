import React, {useContext} from "react";

import {Context} from "../store/appContext";

const Favoritos = (props) => {
    const {store, actions} = useContext(Context);
    return (
        <div>
            
            {store.favoritos.map((favorito) => {
                return (
                    <div>
                        <div> nombre: {favorito.nombre}</div>
                        <button onClick={() => actions.eliminarFavoritos(favorito)}>x</button>
                    </div>
                )
            })}
            <button onClick={() => actions.agregarFavoritos("Angel")}>Agregar</button>
        </div>
    );
};

export default Favoritos;