import React from 'react';

import SocialLinks from '../UI/SocialLinks';
import { Text } from "../context/Language";
import './StayInTouch.css';
function StayInTouch(props) {
    return (
        <div className={`contact-container`}>
            <div className="contact-wrapper">
                <div className="contact-content">
                    <h4 className="home-section-title">
                        <Text tid="section_contact-title" />
                    </h4>
                    <p className="contact-item">
                        <Text tid="section_contact-address" />
                    </p>
                    <a href="tel:+123 456 789 000" className="contact-item">
                        +123 456 789 000
                    </a>
                    <a href="mailto:info@theglasshuts.com" className="contact-item">
                        info@theglasshuts.com
                    </a>
                    <SocialLinks />
                </div>
                {props.children}
            </div>

        </div>
    );
}

export default StayInTouch;