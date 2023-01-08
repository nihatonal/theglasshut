import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import './SocialLinks.css';
function SocialLinks(props) {
    return (
        <div className='social-links-wrapper'>
            <a href='https://www.instagram.com/consinov3/' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
        </div>
    );
}

export default SocialLinks;