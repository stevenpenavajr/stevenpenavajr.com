/* Portfolio component */
/* Contains all other components */
/* Is the parent of all sections */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Portfolio.css';

import Welcome from './Welcome';
import Skills from './Skills';
import Experience from './experience/Experience';
import Projects from './Projects';


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
				<Projects />
			</div>
		);
	}
}

export default Portfolio;
