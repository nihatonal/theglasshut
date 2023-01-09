import React, { useState } from 'react';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import ArrowLeft from '../../assets/icons/arrow_left.svg'
import { ReactSVG } from 'react-svg';
import './ImageSlider.css';
const ImageSlider = ({ slides, style }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
    <section className='slider-container' >
      <div className="hero-arrow-wrapper">
        <button className="hero-arrow-btn" onClick={prevSlide}>
          <ReactSVG src={ArrowLeft} />
        </button>
        <button className="hero-arrow-btn" onClick={nextSlide}>
          <ReactSVG src={ArrowRight} />
        </button>
      </div>
      <div className='slider-wrapper' style={style}>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel' className='image' />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;