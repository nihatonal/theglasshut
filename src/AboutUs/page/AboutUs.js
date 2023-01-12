import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Text, LanguageContext } from "../../shared/context/Language";
import SectionHero from '../../shared/components/formElements/SectionHero';
import ImageGallery from '../components/ImageGallery';
import { sectionsData } from '../../assets/sectionsData';

import background from '../../assets/images/aboutus/hero.png';
import section_image_1 from '../../assets/images/aboutus/aboutus_1.png'

import './AboutUs.css';
function AboutUs(props) {
    const lang = useContext(LanguageContext);

    const content = <div className="about-content-wrapper">
        <button className='about-nav-btn'>{lang.dictionary["contact_us"]}</button>
        <NavLink to='/faq' className='about-nav-btn'>{lang.dictionary["read_faq"]}</NavLink>
    </div>
    return (
        <div className='page-container aboutus-wrapper'>
            <SectionHero
                image={background}
                title={lang.dictionary["about_us"]}
                content={content}
            />
            <div className="section-card-container">
                <div className="section-image-wrapper">
                    <img src={section_image_1} alt="section_image_1" />
                </div>
                <div className="section-card-content">
                    <h3 className="section-card-title"><Text tid='about_us_section_title' /></h3>
                    <p className="section-card-desc"><Text tid='about_us_section_desc' /></p>
                </div>
            </div>
            <ImageGallery
                title={lang.dictionary["about_us_section_galery"]}
                images={sectionsData.aboutus}
                image_content={lang.dictionary["about_us_image_desc"]}
            />
        </div>
    );
}

export default AboutUs;