import React from 'react';

import ButtonBook from "../../shared/UI/ButtonBook";
import image_contact from '../../assets/images/homepage/stay_in_touch.png';
import StayInTouch from '../../shared/components/StayInTouch';
import './Contact.css';
function Contact() {
    return (
        <StayInTouch>
            <div className="contact-image-wrapper">
                <img src={image_contact} alt="image_contact" />
                <ButtonBook className='contact-btn' />
            </div>
        </StayInTouch>
    );
}

export default Contact;