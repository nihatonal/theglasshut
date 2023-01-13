import React from 'react';

import './SectionHero.css';
function SectionHero(props) {
    return (
        <div className='section-hero-container' style={{ backgroundImage: `url(${props.image})` }}>
            <div className="section-hero-content">
                <h2 className="section-hero-title">{props.title}</h2>
                {props.content}
            </div>
            <div className="section-wrapper">
                <div className="section-wrapper-filter"></div>
            </div>
        </div >
    );
}

export default SectionHero;