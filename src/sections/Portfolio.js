import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Portfolio.css';

import Welcome from './Welcome';
import Skills from './Skills';
import Experience from './experience/Experience';


class Portfolio extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="Portfolio">
				<Welcome />
				<Skills />
				<Experience />
			</div>
		);
	}
}

export default Portfolio;
