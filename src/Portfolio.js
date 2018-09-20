import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './Welcome';
import jsonData from './data/particlesjs-config.json';


class Portfolio extends Component {
	render() {
		return (
			<div id="main">
				<Welcome />
			</div>
		);
	}
}

export default Portfolio;
