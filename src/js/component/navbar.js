import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown dropleft">
				<button
					className="btn btn-primary dropdown-toggle"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
					{store.favorites.length == 0 ? (
						<a className="dropdown-item text-center" />
					) : (
						store.favorites.map((item, index) => {
							return (
								<p className="dropdown-item" key={index}>
									{item.name}
									<span onClick={() => actions.deleteFavorites(index)}>
										<i className="fas fa-trash-alt float-right" />
									</span>
								</p>
							);
						})
					)}
				</div>
			</div>
		</nav>
	);
};
