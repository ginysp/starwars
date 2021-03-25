import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("store", store);
	return (
		<div className="container">
			{store.home.map(([key, value], index) => {
				console.log(key, value);
				return (
					<div key={index} className="text-center mt-5">
						<h1>Go to {key}</h1>
						<p key={index}>{key}</p>
						<Link to={`/generic/${key}`}>
							<button className="btn btn-primary">GO {key}</button>
						</Link>
					</div>
				);
			})}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
