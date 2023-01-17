import React, { useState, useRef, useEffect } from 'react';
import ArrowRight from '../../assets/icons/mini_slide_arrow-right.svg';
import ArrowLeft from '../../assets/icons/mini_slide_arrow-left.svg'
import { ReactSVG } from 'react-svg';
import './Slider.css';
const Slider = ({ slides }) => {
    const ref = useRef(null);
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [widthSlide, setWidthSlide] = useState(0);

    useEffect(() => {
        setWidthSlide(ref.current.offsetWidth)
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slide-container' >
            <div className="slide-arrow-wrapper">
                <button className="slide-arrow-btn" onClick={prevSlide} disabled={current === 0}>
                    <ReactSVG className={current === 0 ? 'disable' : null} src={ArrowLeft} />
                </button>
                <button className="slide-arrow-btn" onClick={nextSlide} disabled={current === slides.length - 1}>
                    <ReactSVG className={current === slides.length - 1 ? 'disable' : null} src={ArrowRight} />
                </button>
            </div>
            <div className="slide_bar">
                <p>0{current + 1}</p>
                <input
                    type="range"
                    min="1"
                    max={slides.length}
                    onChange={() => console.log(current)}
                    value={current + 1}
                />
                <p>0{slides.length}</p>
            </div>
            <div ref={ref} className='slide-wrapper'
                style={{ left: `${-widthSlide * current}px` }}
            >
                {slides.map((slide, index) => {
                    return (
                        <div
                            style={{ width: `${widthSlide}px` }}
                            className={index === current ? 'slide_mini active' : 'slide_mini'}
                            key={index}
                        >
                            <img src={slide.image} style={{ width: `${widthSlide}px` }} alt='travel' className='slide-image' />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Slider;