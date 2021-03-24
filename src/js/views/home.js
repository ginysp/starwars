import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.demo.map((item, index) => {
				return (
					<div key={index} className="text-center mt-5">
						<h1>Go to planets</h1>
						<p key={index}>{item.planets}</p>
						<a href="#" className="btn btn-success">
							If you see this green button, bootstrap is working
						</a>
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
