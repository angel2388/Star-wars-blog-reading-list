import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Home = () => {
	const [planetas, modificarPlanetas] = useState([]);
	const [personas, modificarPersona] = useState([]);
	const [vehiculos, modificarVehiculo] = useState([]);

	const obtenerPlanetas = async () => {
		const res = await fetch(`https://www.swapi.tech/api/planets`);
		const data = await res.json();
		console.log({ planetas: data.results });
		modificarPlanetas(data.results);
	}

	const obtenerVehiculos = async () => {
		const res = await fetch(`https://www.swapi.tech/api/vehicles`);
		const data = await res.json();
		console.log({ data });
		modificarVehiculo(data.results);
	}

	const obtenerPersonas = async () => {
		const res = await fetch(`https://www.swapi.tech/api/people`);
		const data = await res.json();
		console.log({ data });
		modificarPersona(data.results);
	}


	useEffect(async () => {
		await obtenerPlanetas()
		await obtenerVehiculos()
		await obtenerPersonas()
	}, [])

	return (<div className="text-center mt-5">
		<div className="row flex-nowrap overflow-scroll">
			{planetas.map((planeta) => {
				return (
					<div className="col columna-planeta" key={planeta.uid}>
						<div className="card tarjeta-pl" style={{ width: "18rem" }}>
							<img src="https://starwars-visualguide.com/assets/img/planets/3.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">{planeta.name}</h5>
								<p className="card-text">{planeta.description}</p>
								<Link className="btn btn-primary button" to={`/planeta/${planeta.uid}`}>{planeta.name}</Link>
								<div onClick={miFoo}><i className="fa fa-heart text-danger" /></div>
							</div>
						</div>
					</div>
				)
			})}
		</div>

		<div className="row flex-nowrap overflow-scroll">
			{personas.map((persona) => {
				return (
					<div className="col columna-persona" key={persona.uid}>
						<div className="card tarjeta-pers" style={{ width: "18rem" }}>
							<img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">{persona.name}</h5>
								<p className="card-text">{persona.description}</p>
								<Link className="btn btn-primary button" to={`/persona/${persona.uid}`}>{persona.name}</Link>
							</div>
						</div>
					</div>

				)
			})}
		</div>

		<div className="row flex-nowrap overflow-scroll">
			{vehiculos.map((vehiculo) => {
				return (
					<div className="col columna-vehiculo" key={vehiculo.uid}>
						<div className="card tarjeta-v" style={{ width: "18rem" }}>
							<img src="https://starwars-visualguide.com/assets/img/vehicles/8.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">{vehiculo.name}</h5>
								<p className="card-text">{vehiculo.description}</p>
								<Link className="btn btn-primary button" to={`/vehiculo/${vehiculo.uid}`}>{vehiculo.name}</Link>
							</div>
						</div>
					</div>

				)
			})}
		</div>
	</div>
	)
};



