import React from 'react';

import { Text } from "../../shared/context/Language";
import ButtonBook from '../../shared/UI/ButtonBook';
import SlideAxisX from '../../shared/UI/SlideAxisX';
import './Hero.css';

function Hero(props) {
    const { add, remove, positionSlide } = SlideAxisX();
    return (
        <div className='hero-container'>
            <div className="hero-content">
                <h1 className="hero-content-title"><Text tid="hero-title" /></h1>
                <p className="hero-content-desc"><Text tid="hero-suptitle" /></p>
            </div>
            <ButtonBook className='hero-btn' />
            <div className="carouselbar_wrapper">
                <div className="carouselbar">
                    <div className='carouselbar_btn'   onMouseDown={add} onMouseUp={remove}></div>
                </div>
            </div>

        </div>
    );
}

export default Hero;