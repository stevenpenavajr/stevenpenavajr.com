/* Skills component */
/* Contains rows of languages/technologies I am familiar with */

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
    csharp,
    git,
    illustrator,
    swift,
    dotnet
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
                    <h1 id="skills-title-text">SKILLS</h1>
                </div>
                <div className="skills-about">
                    <p>{textData["blurbs"]["about"]}</p>
                    <p>{textData["blurbs"]["skills-descr"]}</p>
                    <br />
                </div>

                <div className="skills-icon-container">
                    <div className="skills-icons-row">
                        <div className="skills-icon-box">{html()}<p>HTML5</p></div>
                        <div className="skills-icon-box">{css()}<p>CSS3</p></div>
                        <div className="skills-icon-box">{js()}<p>JavaScript</p></div>
                        <div className="skills-icon-box">{bootstrap()}<p>Bootstrap</p></div>
                        <div className="skills-icon-box">{sass()}<p>Sass</p></div>
                        <div className="skills-icon-box">{illustrator()}<p>Illustrator</p></div>
                    </div>
                    <div className="skills-icons-row">
                        <div className="skills-icon-box">{symfony()}<p>Symfony</p></div>
                        <div className="skills-icon-box">{doctrine()}<p>Doctrine</p></div>
                        <div className="skills-icon-box">{react()}<p>React</p></div>
                        <div className="skills-icon-box">{chrome()}<p>Chrome Devtools</p></div>
                        <div className="skills-icon-box">{mysql()}<p>MySQL</p></div>
                        <div className="skills-icon-box">{dotnet()}<p>.NET</p></div>
                    </div>
                    <div className="skills-icons-row">
                        <div className="skills-icon-box">{node()}<p>Node</p></div>
                        <div className="skills-icon-box">{drupal()}<p>Drupal</p></div>
                        <div className="skills-icon-box">{wordpress()}<p>Wordpress</p></div>
                        <div className="skills-icon-box">{docker()}<p>Docker</p></div>
                        <div className="skills-icon-box">{bitbucket()}<p>Bitbucket</p></div>
                        <div className="skills-icon-box">{git()}<p>Git</p></div>
                    </div>
                    <div className="skills-icons-row">
                        <div className="skills-icon-box">{php()}<p>PHP</p></div>
                        <div className="skills-icon-box">{python()}<p>Python</p></div>
                        <div className="skills-icon-box">{java()}<p>Java</p></div>
                        <div className="skills-icon-box">{cpp()}<p>C++</p></div>
                        <div className="skills-icon-box">{csharp()}<p>C#</p></div>
                        <div className="skills-icon-box">{swift()}<p>Swift</p></div>
                    </div>
                </div>
			</div>
		);
	}
}

export default Skills;