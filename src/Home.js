import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';

import Particles from 'react-particles-js';
import jsonData from './data/particlesjs-config.json';

const particleOptions = jsonData;


class Home extends Component {
	render() {
		console.log(particleOptions);
		return (
			<div>
				<Particles params = {particleOptions} className="Particle-background"/>
				<div className="Title-container">
					<h1 id="Name">Steven Penava</h1>
				</div>
			</div>
		);
	}
}

export default Home;
