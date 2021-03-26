import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { element } from "prop-types";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

export const Generic = () => {
	let { value } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllData(value);
	}, []);

	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Row>
				<Col>
					{store[value] && store[value].length > 0 ? (
						store[value].map((element, index) => (
							<h1 key={index}>{value == "films" ? element.properties.title : element.name}</h1>
						))
					) : (
						<h1>Cargando...</h1>
					)}
				</Col>
			</Row>
		</Container>
	);
};
