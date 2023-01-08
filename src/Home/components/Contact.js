import React from 'react';
import { Text } from "../../shared/context/Language";

import ButtonBook from "../../shared/UI/ButtonBook";
import image_contact from '../../assets/images/homepage/stay_in_touch.png';
import SocialLinks from '../../shared/UI/SocialLinks';
import './Contact.css';
function Contact(props) {
    return (
        <div className='contact-container'>
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
                <div className="contact-image-wrapper">
                    <img src={image_contact} alt="image_contact" />
                    <ButtonBook className='contact-btn' />
                </div>
            </div>

        </div>
    );
}

export default Contact;