import React from "react";
import { NavBar } from "./Card/NavBar";
import Jumbotron from "./Card/Jumbotron";
import { Card } from "./Card/card";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<Jumbotron/>
			<div className="container d-flex justify-content-between">
				<Card className="container d-flex"/>
				<Card className="container d-flex"/>
				<Card className="container d-flex"/>
			</div>
		</div>
	);
};

export default Home;
