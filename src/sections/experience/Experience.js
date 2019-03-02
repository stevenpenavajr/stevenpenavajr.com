/* Experience component */
/* Contains drop-downs for the companies I have worked for */

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/Experience.css';
import textData from './../../data/text.json';

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

                <div className="ups-blurb-container-mobile">
                    <h3 className="company-about-title">UPS</h3>
                    <h4 className="company-role">Applications Developer</h4>
                    <br />
                    <p className="company-role-info">Currently working as an applications developer for the multi-site dispatch team.</p>
                    <p className="company-role-info">Developing both the front and back ends of a metrics dashboard page for UPS packaging sites across the United States.</p>
                </div>
                
                <div className="cbs-blurb-container-mobile">
                    <h3 className="company-about-title">CBS Interactive</h3>
                    <h4 className="company-role">CNET Software Engineering Intern</h4>
                    <br />
                    <p className="company-role-info">{textData["blurbs"]["cbs-info-1"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["cbs-info-2"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["cbs-info-3"]}</p>
                </div>

                <div className="lexmark-blurb-container-mobile">
                    <h3 className="company-about-title">Lexmark International, Inc.</h3>
                    <h4 className="company-role">Student Software Engineer</h4>
                    <br />
                    <p className="company-role-info">{textData["blurbs"]["lexmark-info-1"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["lexmark-info-2"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["lexmark-info-3"]}</p>
                
                </div>

                <div className="uk-blurb-container-mobile">
                    <h3 className="company-about-title">University of Kentucky</h3>
                    <br />
                    <h4 className="company-role">Teaching Assistant for Introduction to Programming</h4>
                    <h6 className="company-role">August 2018 - December 2018</h6>
                    <p className="company-role-info">{textData["blurbs"]["uk-ta-info-1"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["uk-ta-info-2"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["uk-ta-info-3"]}</p>
                    <br />
                    <h4 className="company-role">Computer Science Tutor for Tau Beta Pi</h4>
                    <h6 className="company-role">August 2018 - December 2018</h6>
                    <p className="company-role-info">{textData["blurbs"]["uk-tutor-info-1"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["uk-tutor-info-2"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["uk-ta-info-3"]}</p>
                    <br />
                    <h4 className="company-role">College of Engineering Networking Researcher</h4>
                    <h6 className="company-role">October 2017 - June 2018</h6>
                    <p className="company-role-info">{textData["blurbs"]["uk-research-info-1"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["uk-research-info-2"]}</p>
                    <p className="company-role-info">{textData["blurbs"]["uk-research-info-3"]}</p>
                </div>
            </div>
		);
    }    
}

export default Experience;