import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from "../../shared/context/Language";

import './AboutUs.css';
function AboutUs(props) {
    return (
        <div className="aboutus-container">
            <div className="aboutus-bg-wrapper">
                <div className="aboutus-bg-item"></div>
                <div className="aboutus-bg-item"></div>
            </div>
            <NavLink to='/aboutus' className="aboutus-btn">
                <Text tid="aboutus" />
            </NavLink>
        </div>
    );
}

export default AboutUs;