import React from "react";
import { Link } from "react-router-dom"

const MyCard = (props) => {
    return (
    <div className="col columna-vehiculo" key={props.obj.uid}>
        <div className={"card "+ props.classes} style={{ width: "18rem" }}>
            <img src={props.img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.obj.name}</h5>
                <p className="card-text">{props.obj.description}</p>
                <Link className="btn btn-primary button" to={`/${props.keyName}/${props.obj.uid}`}>{props.obj.name}</Link>
                <div onClick={() => props.onFunction(props.obj)}><i className="fa fa-heart text-danger" /></div>
            </div>
        </div>
    </div>
    )
}

export default MyCard