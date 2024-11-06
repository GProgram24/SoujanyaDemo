import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CustomSlider from "../sections/CustomSlider";
import { businessCards, slides } from "../lib/contants";
import OurProducts from "../sections/OurProducts";
import Cards from "@/components/Cards";
import "../index.css";
import { heroSecImg1, heroSecImg2 } from "@/lib/images";

const Home = () => {
  const navigate = useNavigate();
  const [svgContent, setSvgContent] = useState(""); // State to hold SVG content
  const svgContainerRef = useRef(null);

  // Redirect function
  const handleContactUs = () => {
    navigate("/contact-us");
  };

  // Fetch and load the SVG content
  useEffect(() => {
    fetch("/SJ-FJ.svg")
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data); // Set the SVG content as a string
      });
  }, []);

  // Target all paths for animation once the SVG is loaded
  useEffect(() => {
    if (svgContainerRef.current) {
      const paths = svgContainerRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        const length = path.getTotalLength();

        // Set up the starting position
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Trigger a layout thrashing to ensure the initial state is applied
        path.getBoundingClientRect();

        // Define the animation
        path.style.transition = "stroke-dashoffset 10s ease-in-out";
        path.style.strokeDashoffset = "0";
      });
    }
  }, [svgContent]);

  return (
    <div className="relative w-screen overflow-hidden bg-no-repeat">
      {/* Background SVG */}
      <div
        className="absolute top-0 left-0 w-full h-full object-cover bg-no-repeat -z-10 opacity-60"
        ref={svgContainerRef}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      ></div>

      {/* Main content */}
      <div className="relative z-10">
        <div
          className="w-full h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url("/images/hero-home/png")` }}
        >
          <div className="absolute inset-0 flex flex-col gap-4 lg:gap-10 justify-end text-white font-medium p-5 xl:p-10">
            <h1 className="w-full lg:w-[550px] text-[32px] leading-10 lg:text-[62px] lg:leading-[70px] font-heading">
              A Global Leader <br />
              in Color Solutions
            </h1>
            <button
              onClick={handleContactUs}
              className="bg-red text-white text-base font-subHeading h-[42px] w-[175px] lg:w-[192px] rounded-lg hover:underline"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Who are we section */}
        <div className="w-full flex flex-col px-5 lg:px-10">
          <div className="w-full flex flex-col items-start">
            <p className="py-7 lg:py-10 font-subHeading font-medium text-[18px] sm:text-[20px] md:text-[22px]">
              Who are we
            </p>
            <h1 className="font-heading leading-10 text-[28px] lg:text-[54px] lg:leading-[70px]">
              We develop, manufacture and supply color dispersion products that
              have a positive impact on our everyday life.
            </h1>
            <button className="bg-red text-white text-base font-subHeading h-[42px] w-[175px] lg:w-[192px] my-10 rounded-lg hover:underline">
              Overview
            </button>
          </div>

          <div className="w-full flex gap-5 lg:gap-8 justify-between lg:justify-end mb-5 lg:mb-10 px-3 lg:px-0">
            <div className="w-[110px] lg:w-[250px] h-[160px] lg:h-[400px] bg-cover bg-center">
              <img
                src={heroSecImg1}
                className="w-full h-full"
                alt="Hero Image 1"
              />
            </div>
            <div className="w-[245px] lg:w-[600px] h-[160px] lg:h-[400px] bg-cover bg-center">
              <img
                src={heroSecImg2}
                className="w-full h-full"
                alt="Hero Image 2"
              />
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="w-full flex flex-col px-5 lg:px-10">
          <CustomSlider
            title="What we offer"
            subTitle="We are passionate about what we do"
            slides={slides}
          />
        </div>

        {/* Our business highlights */}
        <div className="w-full flex flex-col bg-white px-5 sm:px-8 md:px-10 lg:px-10">
          <div className="w-full flex flex-col items-start mb-5">
            <p className="py-7 lg:py-10 font-subHeading font-medium text-[18px] sm:text-[20px] md:text-[22px]">
              Our Business Highlights
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10">
            {businessCards.map((card, index) => (
              <div key={index} className="flex flex-col w-full h-full">
                <Cards title={card.title} desc={card.description} />
              </div>
            ))}
          </div>
        </div>

        {/* Our Products */}
        <OurProducts />
      </div>
    </div>
  );
};

export default Home;
