import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { Text } from "../../shared/context/Language";
import ButtonBook from '../../shared/UI/ButtonBook';
import useDragging from '../../shared/util/useDragging';
import useDraggingY from '../../shared/util/useDraggingY';
import Background from '../../assets/images/homepage/hero_1.png';

import arrow_right from '../../assets/icons/arrow_right.svg';
import arrow_left from '../../assets/icons/arrow_left.svg'
import './Hero.css';

function Hero(props) {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState();
    const [bgPositionX, setBgPositionX] = useState(0);
    const [bgPositionY, setBgPositionY] = useState(0)
    const dragging = useDragging();
    const draggingY = useDraggingY();
    const ref = dragging.ref;
    const ref_Y = draggingY.ref;

    useEffect(() => {
        if (dragging.elementOffset.x < 75) {
            setLeft(dragging.elementOffset.x);
            setBgPositionX((dragging.elementOffset.x * 20) / 74)
        }
        if (dragging.elementOffset.x < 0) {
            setLeft(0)
            setBgPositionX(0)
        }

    }, [dragging.elementOffset.x]);

    useEffect(() => {
        // setTop(draggingY.elementOffset.y);
        if (draggingY.elementOffset.y < 344) {
            setTop(draggingY.elementOffset.y);
            setBgPositionY((draggingY.elementOffset.y * 20) / 344)
        }
        if (draggingY.elementOffset.y < 0) {
            setTop(0)
            setBgPositionY(0)
        }

    }, [draggingY.elementOffset.y]);

    return (
        <div className='hero-container'>
            <div className="hero-images-wrapper">
                <div className="hero-arrow-wrapper">
                    <button className="hero-arrow-btn">
                        <ReactSVG src={arrow_left} />
                    </button>
                    <button className="hero-arrow-btn">
                        <ReactSVG src={arrow_right} />
                    </button>
                </div>
                <div
                    className="hero-image"
                    style={{
                        backgroundImage: `url(${Background})`,
                        left: `-${bgPositionX}%`,
                        top: `-${bgPositionY}%`
                    }}

                ></div>
            </div>
            <div className="hero-content">
                <h1 className="hero-content-title"><Text tid="hero-title" /></h1>
                <p className="hero-content-desc"><Text tid="hero-suptitle" /></p>
            </div>
            <ButtonBook className='hero-btn' />
            <div className="slidebar_X-wrapper">
                <div className="slidebar_X_btn-wrapper"
                    ref={ref}
                    style={{
                        position: "absolute",
                        left: left,
                    }}
                >
                    <div className='slidebar_X_btn'

                    ></div>
                </div>
            </div>
            <div className="slidebar_Y-wrapper">
                <div className='slidebar_Y_btn-wrapper'
                    ref={ref_Y}
                    style={{
                        position: "absolute",
                        top: top
                    }}>
                    <div className='slidebar_Y_btn'

                    ></div>
                </div>
            </div>


        </div >
    );
}

export default Hero;