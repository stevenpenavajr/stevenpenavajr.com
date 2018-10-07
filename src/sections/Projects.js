import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Projects.css';
import textData from './../data/text.json';
import dbIcon from '../assets/danceblue.svg';

class Projects extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="Projects">
                <div id="projects-title-container">
                    <h1 id="projects-title">SIDE PROJECTS</h1>
                </div>
                <div className="project-container">
                    <img className="project-icon" src={dbIcon}></img>
                    <div className="project-description">
                        <p>{textData["blurbs"]["projects-descr-db"]}</p>
                    </div>
                </div>

			</div>
		);
	}
}

export default Projects;
