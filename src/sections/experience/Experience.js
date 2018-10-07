import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/Experience.css';
import textData from './../../data/text.json';
import cbsiLogo from './../../assets/companies/cbsi-red.svg';
import lexmarkLogo from './../../assets/companies/lexmark.svg';
import ukLogo from './../../assets/companies/uk.svg';
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
} from '../../assets/icons';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.renderCompany = this.renderCompany.bind(this);
    }

    state = {
        isOpened: false,
        blurbHeight: 100,
        preset: 'gentle',
        stiffness: presets.stiff.stiffness,
        damping: presets.stiff.damping,
        companyShown: "CBS"
    }

    handleImageClick(company) {
        console.log(this.state.companyShown);
        this.setState(
            {
                isOpened: !this.state.isOpened,
                companyShown: company
            }
        )
    }

    renderCompany() {

        var height;

        if (this.state.companyShown === "CBS") {
            height = 500;
            return(
            <div style={{height}} className="cbs-blurb-container">
                <h3 className="company-about-title">CBS Interactive</h3>
                <h4 className="company-role">CNET Software Engineering Intern</h4>
                <br />
                <p className="company-role-info">{textData["blurbs"]["cbs-info-1"]}</p>
                <p className="company-role-info">{textData["blurbs"]["cbs-info-2"]}</p>
                <p className="company-role-info">{textData["blurbs"]["cbs-info-3"]}</p>
                <p className="company-role-info">Gained experience with:</p>
                <div className="icon-container-exp">
                    <div className="icons-row-exp">
                        <div className="icon-box-exp">{symfony()}</div>
                        <div className="icon-box-exp">{css()}</div>
                        <div className="icon-box-exp">{php()}</div>
                        <div className="icon-box-exp">{java()}</div>
                        <div className="icon-box-exp">{bitbucket()}</div>
                        <div className="icon-box-exp">{js()}</div>
                    </div>
                </div>
            </div>
            );
        } else if (this.state.companyShown === "Lexmark") {
            height = 500;
            return(
            <div style={{height}} className="lexmark-blurb-container">
                <h3 className="company-about-title">Lexmark International, Inc.</h3>
                <h4 className="company-role">Student Software Engineer</h4>
                <br />
                <p className="company-role-info">{textData["blurbs"]["lexmark-info-1"]}</p>
                <p className="company-role-info">{textData["blurbs"]["lexmark-info-2"]}</p>
                <p className="company-role-info">{textData["blurbs"]["lexmark-info-3"]}</p>
                <p className="company-role-info">Gained experience with:</p>
                <div className="icon-container-exp">
                    <div className="icons-row-exp">
                        <div className="icon-box-exp">{python()}</div>
                        <div className="icon-box-exp">{mysql()}</div>
                        <div className="icon-box-exp">{csharp()}</div>
                        <div className="icon-box-exp">{php()}</div>
                    </div>
                </div>
            </div>
            );
        } else if (this.state.companyShown === "UK") {
            height = 800;
            return(
            <div style={{height}} className="uk-blurb-container">
                <h3 className="company-about-title">University of Kentucky</h3>
                <br />
                <h4 className="company-role">Teaching Assistant for Introduction to Programming (August 2018 - Present)</h4>
                <br />
                <p className="company-role-info">{textData["blurbs"]["uk-ta-info-1"]}</p>
                <p className="company-role-info">{textData["blurbs"]["uk-ta-info-2"]}</p>
                <p className="company-role-info">{textData["blurbs"]["uk-ta-info-3"]}</p>
                <br />
                <h4 className="company-role">Computer Science Tutor for Tau Beta Pi (August 2018 - Present)</h4>
                <br />
                <p className="company-role-info">{textData["blurbs"]["uk-tutor-info-1"]}</p>
                <p className="company-role-info">{textData["blurbs"]["uk-tutor-info-2"]}</p>
                <p className="company-role-info">{textData["blurbs"]["uk-ta-info-3"]}</p>
                <br />
                <h4 className="company-role">College of Engineering Networking Researcher (October 2017 - June 2018)</h4>
                <br />
                <p className="company-role-info">{textData["blurbs"]["uk-research-info-1"]}</p>
                <p className="company-role-info">{textData["blurbs"]["uk-research-info-2"]}</p>
                <p className="company-role-info">{textData["blurbs"]["uk-research-info-3"]}</p>
            </div>
            );
        }
    }


	render() {


        const {
            isOpened,
            blurbHeight,
            stiffness,
            damping
          } = this.state;

		return (
			<div id="experience-section" className="Experience">
                <div id="experience-title-container">
                    <h1 id="experience-title">FIELD EXPERIENCE</h1>
                </div>
                <div className="experience-about">
                    <p>{textData["blurbs"]["experience-descr"]}</p>
                    <br />
                </div>

                <div className="company-button-container">
                    <div className="company-logo-box"><img onClick={() => this.handleImageClick("CBS")} className="company-logo" src={cbsiLogo}></img><p>CBS Interactive<br />Summer 2018</p></div>
                    <div className="company-logo-box"><img onClick={() => this.handleImageClick("Lexmark")} className="company-logo" src={lexmarkLogo}></img><p>Lexmark International<br />Summer 2017</p></div>
                    <div className="company-logo-box"><img onClick={() => this.handleImageClick("UK")} className="company-logo" src={ukLogo}></img><p>University of Kentucky<br />2015 - Present</p></div>
                </div>

                <Collapse isOpened={isOpened} springConfig={{stiffness, damping}}>
                    { this.renderCompany() }

                    {/* <div className="cbs-blurb-container">
                        <h3 className="company-about-title">CBS Interactive</h3>
                    </div> */}

                    {/* #018A44 lexmark
                    #0033A0 uk
                    #EF0000 cbs */}

                    {/* <div className="lexmark-blurb-container">
                        <h3 className="company-about-title">Lexmark International, Inc.</h3>
                    </div> */}
                </Collapse> 

            </div>
		);
	}
}

export default Experience;