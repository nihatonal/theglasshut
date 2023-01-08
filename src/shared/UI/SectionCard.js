import React from 'react';


import './SectionCard.css'
function SectionCard(props) {
    return (
        <div className='section-container'>
            <div className="section-wrapper">
                <p className="section-suptitle">
                    {props.subtitle} <span></span>
                </p>
                <div className="section-content">{props.children}</div>
                {props.content}
            </div>
        </div>
    );
}

export default SectionCard;