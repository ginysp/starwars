import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Button, Carousel, Image } from "react-bootstrap";

//PREGUNTAR COMO IMPORTAR LAS IMG DINAMICAS, INVESTIGUE PERO CON REQUIRE NO LO LOGRE PORQ NO COMPILA
import films from "../../img/films.jpg";
import people from "../../img/people.jpg";
import planets from "../../img/planets.jpg";
import species from "../../img/species.jpg";
import starships from "../../img/starships.jpg";
import vehicles from "../../img/vehicles.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//console.log("store", store);
	const history = useHistory();
	useEffect(() => {
		actions.getToken();
		if (!store.login) {
			history.push("/");
		}
	}, []);

	return (
		<Container>
			<Carousel>
				{store.home.map(([key, value], index) => {
					return (
						<Carousel.Item key={index}>
							{(() => {
								switch (key) {
									case "films":
										return (
											<Image
												src={films}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "people":
										return (
											<Image
												src={people}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "planets":
										return (
											<Image
												src={planets}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "species":
										return (
											<Image
												src={species}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "starships":
										return (
											<Image
												src={starships}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									case "vehicles":
										return (
											<Image
												src={vehicles}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
									default:
										return (
											<Image
												src={people}
												rounded
												alt={key}
												className="d-block w-100"
												width="500px"
												height="600px"
											/>
										);
								}
							})()}
							<Carousel.Caption key={index}>
								<Link to={`/generic/${key}`}>
									<Button variant="primary">GO to {key}</Button>
								</Link>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</Container>
	);
};
