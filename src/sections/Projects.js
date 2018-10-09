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
                    <div className="placeholder"></div>
                    <div className="project-description">
                        <h1 className="project-title">Danceblue Restaurant Night Web Portal</h1>
                        <h3 className="project-title">September 2018 - Present</h3>
                        <p>{textData["blurbs"]["projects-descr-db"]}</p>
                    </div>
                </div>

			</div>
		);
	}
}

export default Projects;
