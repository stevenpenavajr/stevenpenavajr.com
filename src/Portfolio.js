import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Portfolio.css';

import Welcome from './Welcome';
import Education from './Skills';


class Portfolio extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="Portfolio">
				<Welcome />
				<Education />
			</div>
		);
	}
}

export default Portfolio;
