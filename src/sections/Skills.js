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
                <div id="skills-title-container">
                    <h1 id="skills-title-text">SKILLS</h1>
                </div>
                <div className="skills-about">
                    {/* <p>Download my resume here.</p> */}
                    <p>{textData["blurbs"]["about"]}</p>
                    <p>{textData["blurbs"]["skills-descr"]}</p>
                    <br />
                </div>

                <div className="skills-icon-container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{html()}<p>HTML5</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{css()}<p>CSS3</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{js()}<p>JavaScript</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{bootstrap()}<p>Bootstrap</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{sass()}<p>Sass</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{illustrator()}<p>Illustrator</p></div>
                    {/* </div> */}

                    {/* <div className="row"> */}
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{symfony()}<p>Symfony</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{doctrine()}<p>Doctrine</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{react()}<p>React</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{chrome()}<p>Chrome Devtools</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{mysql()}<p>MySQL</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{dotnet()}<p>.NET</p></div>
                    {/* </div> */}
                    
                    {/* <div className="row"> */}
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{node()}<p>Node</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{drupal()}<p>Drupal</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{wordpress()}<p>Wordpress</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{docker()}<p>Docker</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{bitbucket()}<p>Bitbucket</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{git()}<p>Git</p></div>
                    {/* </div> */}

                    {/* <div className="row"> */}
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{php()}<p>PHP</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{python()}<p>Python</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{java()}<p>Java</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{cpp()}<p>C++</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{csharp()}<p>C#</p></div>
                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 skill">{swift()}<p>Swift</p></div>
                    </div>
                </div>
			</div>
		);
	}
}

export default Skills;