import React from 'react';
import Slider from '../../UI/Slider';
import './SectionCard.css';
function SectionCard(props) {

    return (
        <div className='section-card-container'>
            <Slider slides={props.slides} />
            <div className="section-card-content">
                <h3 className="section-card-content-title">{props.title}</h3>
            </div>
        </div>
    );
}

export default SectionCard;