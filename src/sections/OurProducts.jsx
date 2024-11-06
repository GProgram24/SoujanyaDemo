import React from 'react';
import { cards } from '../lib/contants';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow component
const CustomArrow = ({ className, style, onClick, icon }) => {
    return (
        <button
            className={`${className} bg-transparent border border-gray-400 py-1 px-3 rounded-sm hover:bg-gray-100`}
            style={{ ...style }}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

const OurProducts = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        swipe: true,
        responsive: [
            {
                breakpoint: 1024, // Tablets and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                },
            },
        ],
    };

    return (
        <div className="w-full mb-5 lg:mb-10">
            <div className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-16 px-5 lg:px-10">
                {/* Header Section */}
                <div className="w-full flex flex-col items-start">
                    <p className="py-3 sm:py-5 lg:py-10 font-subHeading font-medium text-[18px] sm:text-[20px] md:text-[22px]">
                        Our Products
                    </p>
                    <h1 className="font-heading sm:text-[40px] text-[28px] lg:text-[54px] leading-8 sm:leading-10 lg:leading-[70px]">
                        We are passionate about what we do
                    </h1>
                </div>

                {/* Slider Section */}
                <div className="w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} className="p-2 sm:p-4 lg:p-6">
                                <div
                                    className={`w-full h-full flex flex-col justify-between ${card.cardColor} gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 text-white font-subHeading rounded-2xl h-[500px]`} // Set fixed height here
                                >
                                    <div className="flex-grow">
                                        <div className="flex flex-col gap-2 sm:gap-4">
                                            <h1 className="text-[24px] sm:text-[32px] font-heading lg:text-[42px] leading-6 sm:leading-8 lg:leading-[50px]">
                                                {card.title}
                                            </h1>
                                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-5 lg:leading-[26px]">
                                                {card.desc}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-3 mt-4 sm:mt-6 lg:mt-8">
                                            {card.products.map((product, index) => (
                                                <div key={index} className="flex gap-4 sm:gap-6 items-center">
                                                    <img
                                                        src={product.img}
                                                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                                                        alt={product.productName}
                                                    />
                                                    <h1 className="text-[14px] sm:text-[16px] lg:text-[18px]">
                                                        {product.productName}
                                                    </h1>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Link to={card.link}>
                                            <button className="w-full flex items-center justify-center gap-2 sm:gap-3 rounded-lg border border-white py-2 text-[14px] sm:text-[16px] lg:text-[18px] font-light hover:bg-white hover:text-black transition-all duration-300">
                                                See More <HiOutlineArrowNarrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Custom Arrows */}
                    <div className="flex justify-between px-2 mt-6 lg:hidden">
                        <CustomArrow icon={<HiOutlineArrowNarrowLeft />} onClick={prevSlide} />
                        <CustomArrow icon={<HiOutlineArrowNarrowRight />} onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
