import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Generic = () => {
	let { value } = useParams();

	console.log(value);
	const { store, actions } = useContext(Context);
	console.log(store);
	useEffect(() => {
		actions.getAllData(value);
	}, []);
	return (
		<div>
			{store[value] && store[value].length > 0 ? (
				store[value].map((person, index) => <h1 key={index}>{person.name}</h1>)
			) : (
				<h1>Cargando...</h1>
			)}
		</div>
	);
};
