import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Skills.css';
import textData from './../data/text.json';

import {
    html,
    css,
    js,
    php,
    bootstrap,
    sass,
    symfony,
    react,
    doctrine,
    wordpress,
    mysql,
    node,
    drupal,
    chrome,
    docker,
    bitbucket,
    python,
    jetbrains,
    java,
    cpp,
    csharp
} from '../assets/icons';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }


	render() {
		return (
			<div id="skills-section" className="Skills">
                <div ref={this.myRef}></div>
                <div id="skills-title-container">
                    <h1 id="skills-title">SKILLS</h1>
                </div>
                <div className="skills-about">
                    <p>{textData["blurbs"]["about"]}</p>
                    <p>{textData["blurbs"]["skills-descr"]}</p>
                    <br />
                </div>

                <div className="icon-container">
                    <div className="icons-row">
                        <div className="icon-box">{html()}<p>HTML5</p></div>
                        <div className="icon-box">{css()}<p>CSS3</p></div>
                        <div className="icon-box">{js()}<p>JavaScript</p></div>
                        <div className="icon-box">{bootstrap()}<p>Bootstrap</p></div>
                        <div className="icon-box">{sass()}<p>Sass</p></div>
                    </div>
                    <div className="icons-row">
                        <div className="icon-box">{symfony()}<p>Symfony</p></div>
                        <div className="icon-box">{doctrine()}<p>Doctrine</p></div>
                        <div className="icon-box">{react()}<p>React</p></div>
                        <div className="icon-box">{chrome()}<p>Chrome Devtools</p></div>
                        <div className="icon-box">{mysql()}<p>MySQL</p></div>
                    </div>
                    <div className="icons-row">
                        <div className="icon-box">{node()}<p>Node</p></div>
                        <div className="icon-box">{drupal()}<p>Drupal</p></div>
                        <div className="icon-box">{wordpress()}<p>Wordpress</p></div>
                        <div className="icon-box">{docker()}<p>Docker</p></div>
                        <div className="icon-box">{bitbucket()}<p>Bitbucket</p></div>
                    </div>
                    <div className="icons-row">
                        <div className="icon-box">{python()}<p>Python</p></div>
                        <div className="icon-box">{php()}<p>PHP</p></div>
                        <div className="icon-box">{java()}<p>Java</p></div>
                        <div className="icon-box">{cpp()}<p>C++</p></div>
                        <div className="icon-box">{csharp()}<p>C#</p></div>
                    </div>
                </div>
			</div>
		);
	}
}

export default Skills;

// My name is Steven Penava. I'm a Dean's List Computer Science student at the University of Kentucky with a unique blend of technical and interpersonal skills. I consider myself an excellent communicator, a diligent worker, and a creative thinker. I will graduate December 2018 and am currently searching for full-time opportunities.  
