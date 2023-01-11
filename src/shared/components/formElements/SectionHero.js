import React from 'react';

import './SectionHero.css';
function SectionHero(props) {
    return (
        <div className='section-hero-container'>
            <div className="section-hero-content">
                <h2 className="section-hero-title">{props.title}</h2>
                {props.content}
            </div>
            <div className="section-wrapper">
                <div className="section-wrapper-filter"></div>
                <img src={props.image} alt="hero-img" />
            </div>
        </div >
    );
}

export default SectionHero;