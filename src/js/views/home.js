import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import MyCard from "../component/myCard.js";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [planetas, modificarPlanetas] = useState([]);
	const [personas, modificarPersona] = useState([]);
	const [vehiculos, modificarVehiculo] = useState([]);

	const obtenerPlanetas = async () => {
		const res = await fetch(`https://www.swapi.tech/api/planets`);
		const data = await res.json();
		console.log({ planetas: data.results });
		modificarPlanetas(data.results);
	}
	
	const obtenerPersonas = async () => {
		const res = await fetch(`https://www.swapi.tech/api/people`);
		const data = await res.json();
		console.log({ data });
		modificarPersona(data.results);
	}

	const obtenerVehiculos = async () => {
		const res = await fetch(`https://www.swapi.tech/api/vehicles`);
		const data = await res.json();
		console.log({ data });
		modificarVehiculo(data.results);
	}

	useEffect(async () => {
		await obtenerPlanetas()
		await obtenerPersonas()
		await obtenerVehiculos()
	}, [])


	const agregarFavorito = (obj) => {
		actions.agregarFavoritos(obj)
	}

	return (<div className="text-center mt-5">
		<div className="row flex-nowrap overflow-scroll">
			{planetas.map((planeta) => {
				return <MyCard
					obj={planeta}	
					keyName="planeta"
					img="https://starwars-visualguide.com/assets/img/planets/3.jpg"
					classes="tarjeta-pl"
					onFunction={agregarFavorito}
				/>
			})}
		</div>

		<div className="row flex-nowrap overflow-scroll">
			{personas.map((persona) => {
				return <MyCard
					obj={persona}
					keyName="persona"
					img="https://starwars-visualguide.com/assets/img/characters/4.jpg"
					classes="tarjeta-pers"
					onFunction={agregarFavorito}
				/>
			})}
		</div>

		<div className="row flex-nowrap overflow-scroll">
			{vehiculos.map((vehiculo) => {
				return <MyCard
					obj={vehiculo}
					keyName="vehiculo"
					img="https://starwars-visualguide.com/assets/img/vehicles/8.jpg"
					classes="tarjeta-v"
					onFunction={agregarFavorito}
				/>
			})}
		</div>
	</div>
	)
};



