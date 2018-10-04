import React, { Component } from 'react';
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
        if (this.state.companyShown === "CBS") {
            return(
            <div className="cbs-blurb-container">
                <h3 className="company-about-title">CBS Interactive</h3>
            </div>
            );
        } else if (this.state.companyShown === "Lexmark") {
            return(
            <div className="lexmark-blurb-container">
                <h3 className="company-about-title">Lexmark International, Inc.</h3>
            </div>
            );
        } else if (this.state.companyShown === "UK") {
            return(
            <div className="uk-blurb-container">
                <h3 className="company-about-title">University of Kentucky</h3>
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