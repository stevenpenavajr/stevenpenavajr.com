import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/Experience.css';
import textData from './../../data/text.json';
import cbsiLogo from './../../assets/cbsi-final.png';

class Experience extends Component {
    constructor(props) {
        super(props);
    }


	render() {
		return (
			<div id="experience-section" className="Experience">
                <div id="experience-title-container">
                    <h1 id="experience-title">FIELD EXPERIENCE</h1>
                </div>
                <div className="experience-about">
                    <p>{textData["blurbs"]["experience-descr"]}</p>
                    <br />
                </div>

                <Collapse isOpened={true || false}>
                    <div>Random content</div>
                </Collapse>

            </div>
		);
	}
}

export default Experience;