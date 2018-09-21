import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Skills.css';
import textData from './data/text.json';


class Skills extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
	render() {
		return (
			<div className="Skills">
                <div ref={this.myRef}></div>
                <div id="skills-title-container">
                    <h1 id="skills-title">SKILLS</h1>
                </div>
                <div id="skills-about">
                    <p>{textData["blurbs"]["about"]}</p>
                    <p>{textData["blurbs"]["skills-descr"]}</p>
                </div>
			</div>
		);
	}
}

export default Skills;

// My name is Steven Penava. I'm a Dean's List Computer Science student at the University of Kentucky with a unique blend of technical and interpersonal skills. I consider myself an excellent communicator, a diligent worker, and a creative thinker. I will graduate December 2018 and am currently searching for full-time opportunities.  
