import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

import genericImage from "../../img/starwars.jpg";

export const Details = () => {
	let { value, id } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllDetails(value, id);
	}, []);

	const goBack = () => {
		history.goBack();
	};
	//let detail = store[value][id];
	console.log("store ", store);
	console.log("cga ");
	console.log("dataresult ", Object.entries(store.details));
	return (
		<Container>
			<Row>
				{store[value] && store[value][id] ? (
					<Col>
						<br />
						<Card style={{ width: "18rem" }}>
							<Image src={genericImage} rounded className="card-img-top" />
							<Card.Body>
								<Card.Title>{store[value][id].properties.director}</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				) : (
					<h1>You must select a value... Go Back :)</h1>
				)}
				<br />
			</Row>
			<br />
			<Link to="/">
				<Button variant="primary" onClick={() => goBack()}>
					Go back
				</Button>
			</Link>
		</Container>
	);
};
