import React, { useState } from 'react';
import { Text } from "../../shared/context/Language";
import ButtonBook from '../../shared/UI/ButtonBook';
import ImageSlider from '../../shared/UI/ImageSlider';
import './Hero.css';

function Hero(props) {
    const [left, setLeft] = useState(10);
    const [top, setTop] = useState(10);
    const [bgPositionX, setBgPositionX] = useState(10);
    const [bgPositionY, setBgPositionY] = useState(10)


    const SliderData = [
        {
            image:
                require('../../assets/images/homepage/hero_1.png')
        },
        {
            image:
                require('../../assets/images/homepage/hero_2.png')
        },
        {
            image:
                require('../../assets/images/homepage/hero_3.jpg')
        },
        {
            image:
                require('../../assets/images/homepage/hero_5.jpg')
        },

    ];
    return (
        <div className='hero-container'>
            <div className="hero-images-wrapper">
                <ImageSlider slides={SliderData}
                    style={{
                        left: `-${bgPositionX}%`,
                        top: `-${bgPositionY}%`
                    }}
                />
            </div>
            <div className="hero-content">
                <h1 className="hero-content-title"><Text tid="hero-title" /></h1>
                <p className="hero-content-desc"><Text tid="hero-suptitle" /></p>
            </div>
            <ButtonBook className='hero-btn' />
            <div className="slidebar_X-wrapper">
                <input
                    type="range"
                    min="0"
                    max={20}
                    onChange={(e) => {
                        setLeft(e.target.value)
                        setBgPositionX(e.target.value)
                    }}
                    value={left}
                />
            </div>
            <div className="slidebar_Y-wrapper">
                <input
                    type="range"
                    min="0"
                    max={20}
                    onChange={(e) => {
                        setTop(e.target.value)
                        setBgPositionY(e.target.value)
                    }}
                    value={top}
                />
            </div>


        </div >
    );
}

export default Hero;