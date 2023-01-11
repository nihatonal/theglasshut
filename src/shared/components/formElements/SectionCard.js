import React from 'react';
import Slider from '../../UI/Slider';
import './SectionCard.css';
function SectionCard(props) {

    return (
        <div className='section-card-container'>
            {props.title_content}
            <Slider slides={props.slides} />
            <div className="section-card-content">
                <h3 className="section-card-content-title">{props.title}</h3>
                {props.children}
                <div className="section-btns-wrapper" style={{ gridTemplateColumns: `repeat(${props.buttons.length},auto)` }}>
                    {props.buttons && props.buttons.map((button, index) =>
                        <button
                            key={button + index}
                            id={button + (index + 1)} s
                            className={props.isActive === index ? `section-btn active-btn` : 'section-btn'}
                            onClick={props.onClick}>
                            {button}
                        </button>
                    )}

                </div>
                <p className="section-desc">{props.desc}</p>
            </div>
        </div>
    );
}

export default SectionCard;