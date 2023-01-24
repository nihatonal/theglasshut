import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SliderDates = (props) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={
                    {
                        ...style,
                        display: "block",
                        background: "none",
                        right: "10%",
                        width: "20px",
                        height: "20px",
                        top: "15px",
                        transform: "rotate(-90deg)"
                    }
                }
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={
                    {
                        ...style,
                        display: "block",
                        background: "none",
                        left: "76.5%",
                        width: "20px",
                        height: "20px",
                        top: "50px",
                        transform: "rotate(-90deg)",
                        zIndex: 99
                    }
                }
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
       
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div>
    )

}
export default SliderDates;