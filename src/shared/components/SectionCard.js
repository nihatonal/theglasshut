import React, { useState } from 'react';
import Slider from '../UI/Slider';
import './SectionCard.css';
function SectionCard(props) {
    const [desc, setDesc] = useState(0);
    const buttonHandler = (x) => {
        setDesc(x)
        console.log(x)
    }
    return (
        <div className='section-card-container'>
            {props.title_content}
            <Slider slides={props.slides} />
            <div className="section-card-content">
                <h3 className="section-card-content-title">{props.title}</h3>
                {props.children}
                <div className="section-btns-wrapper" style={{ gridTemplateColumns: `repeat(${props.buttons.length},auto)` }}>
                    {props.buttons.map((button, index) =>
                        <button
                            key={button + index}
                            id={button + (index + 1)}
                            className={desc === index ? `section-btn active-btn` : 'section-btn'}
                            onClick={() => buttonHandler(index)}
                        >
                            {button}
                        </button>
                    )}

                </div>
                <p className="section-desc">{props.desc[desc]}</p>
            </div>
        </div>
    );
}

export default SectionCard;