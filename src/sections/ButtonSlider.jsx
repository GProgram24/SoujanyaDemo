import React, { useState } from 'react';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow component
const CustomArrow = ({ className, style, onClick, icon }) => {
    return (
        <button
            className={`${className} bg-transparent border border-gray-400 py-1 px-3 rounded-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out`}
            style={{ ...style }}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

const ButtonSlider = ({ categories, activeCategory, onCategorySelect }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = React.useRef(null);

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for larger screens
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        swipe: true, // Enable swipe for all devices
        touchMove: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                    touchMove: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    touchMove: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="mb-5 lg:mb-10">
            <Slider ref={sliderRef} {...settings}>
                {Object.keys(categories).map((category, index) => (
                    <div key={index} className="w-full px-2 lg:px-4 py-8">
                        <button
                            onClick={() => onCategorySelect(category)}
                            className={`px-6 py-2 border rounded-md transition-all duration-300 ease-in-out w-[10rem] lg:w-[20rem] ${
                                activeCategory === category
                                    ? 'bg-red text-white shadow-lg'
                                    : 'bg-white text-black border border-gray-300 hover:bg-[#d2d3d3]'
                            }`}
                        >
                            {category}
                        </button>
                    </div>
                ))}
            </Slider>

            {/* Custom Arrows */}
            <div className="flex justify-between px-4">
                <CustomArrow icon={<HiOutlineArrowNarrowLeft />} onClick={prevSlide} />
                <CustomArrow icon={<HiOutlineArrowNarrowRight />} onClick={nextSlide} />
            </div>
        </div>
    );
};

export default ButtonSlider;
