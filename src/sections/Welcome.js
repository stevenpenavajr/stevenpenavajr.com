import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Welcome.css';

import Particles from 'react-particles-js';
import jsonData from './../data/particlesjs-config.json';

import githubLogo from './../assets/github-logo.svg'
import linkedInLogo from './../assets/linkedin-logo-round.svg'
import mailLogo from './../assets/at.svg'

const particleOptions = jsonData;

class Welcome extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Welcome">
				<Particles params = {particleOptions} className="Particle-background"/>
				<div className="title-container">
					<h1 id="title-name">STEVEN PENAVA</h1>
					<div id="title-button-container">
						<a href="#skills-section"><button type="button" class="btn btn-outline-primary title-button">SKILLS</button></a>
						<a href="#experience-section"><button type="button" class="btn btn-outline-primary title-button">FIELD EXPERIENCE</button></a>
						<button type="button" class="btn btn-outline-primary title-button">CURRENT PROJECTS</button>
					</div>
					<div id="title-img-container">
						<a href="https://github.com/stevenpenavajr" target="_blank"><img className="title-logo" src={githubLogo} alt="Github"></img></a>
						<a href="https://www.linkedin.com/in/steven-penava-jr-a58398bb/" target="_blank"><img className="title-logo" src={linkedInLogo} alt="LinkedIn"></img></a>
						<a href="mailto:steven.penava@gmail.com"><img className="title-logo" src={mailLogo} alt="E-mail"></img></a>
					</div>
				</div>
			</div>
		);
	}
}

export default Welcome;