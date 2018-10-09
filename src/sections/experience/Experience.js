import React, { Component } from 'react';
import ReactDOM from 'react';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/Experience.css';
import textData from './../../data/text.json';
import cbsiLogo from './../../assets/companies/cbsi-red.svg';
import lexmarkLogo from './../../assets/companies/lexmark.svg';
import ukLogo from './../../assets/companies/uk.svg';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.renderCompany = this.renderCompany.bind(this);
    }

    state = {
        isOpened: false,
        preset: 'gentle',
        stiffness: presets.stiff.stiffness,
        damping: presets.stiff.damping,
        companyShown: "CBS",
        oneCompanyIsOpened: false,
        height: 100
    }

    handleImageClick(company) {
        console.log(this.state.companyShown);
        this.setState(
            {
                isOpened: true,
                companyShown: company
            }
        )
    }


	render() {


        const {
            isOpened,
            height,
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

                <Collapse id="collapser" isOpened={isOpened} springConfig={{stiffness, damping}}>
                    { this.renderCompany(height) }
                </Collapse> 
            </div>
		);
    }

    renderCompany(height) {

        if (this.state.companyShown === "CBS") {

            height = 450;
            
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
                        <div className="icon-box-exp-text">Symfony</div>
                        <div className="icon-box-exp-text">CSS</div>
                        <div className="icon-box-exp-text">PHP</div>
                        <div className="icon-box-exp-text">Java</div>
                        <div className="icon-box-exp-text">Bitbucket</div>
                        <div className="icon-box-exp-text">JavaScript</div>
                    </div>
                </div>
            </div>
            
            );
        } else if (this.state.companyShown === "Lexmark") {
            height = 480;

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
                        {/* <div className="icon-box-exp">{python()}</div>
                        <div className="icon-box-exp">{mysql()}</div>
                        <div className="icon-box-exp">{csharp()}</div>
                        <div className="icon-box-exp">{php()}</div> */}
                        <div className="icon-box-exp-text">Python</div>
                        <div className="icon-box-exp-text">MySQL</div>
                        <div className="icon-box-exp-text">C#</div>
                        <div className="icon-box-exp-text">PHP</div>
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
}

export default Experience;