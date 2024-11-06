// import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { sidebarImg1, sidebarImg2 } from "../lib/images";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out overflow-y-scroll overflow-x-hidden custom-scroll`}
    >
      <div className="w-full h-full flex flex-col gap-16">
        {/* header */}
        <div
          className={` w-full px-5 lg:px-10 h-[62px] z-40 bg-opacity-90 backdrop-blur-lg transition-all duration-300`}
        >
          <div className="w-full flex items-center justify-between h-full py-10">
            <div className="text-black flex items-center gap-5">
              <div>
                <button className="w-5" onClick={toggleSidebar}>
                  <img src="/logos/close.png" alt="close" />
                </button>
              </div>
              <img src="/logos/NavLogoBlack.svg" className="w-40" alt="logo" />
            </div>
            {/* <div className="lg:flex  items-center hidden ">
              <div className="cursor-pointer">
                <CiSearch className="text-black text-lg" />
              </div>
            </div> */}
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col justify-between gap-28 lg:gap-40">
          <nav className="lg:ml-20 w-full lg:w-[400px] ">
            <div className="flex flex-col gap-2 font-subHeading text-[14px] lg:text-[22px] leading-[150%] text-black">
              <Link to="/">
                <div
                  onClick={toggleSidebar}
                  className="flex items-center justify-between py-3 border-b border-black px-4"
                >
                  <p>Home</p>
                  <MdOutlineKeyboardArrowRight className="text-2xl" />
                </div>
              </Link>
            </div>
          </nav>

          {/* text and images */}
          <div className="w-full flex flex-col lg:flex-row px-5 lg:px-20 lg:py-10 gap-16 lg:gap-0 pb-7">
            <div className="flex flex-col w-full gap-5 lg:gap-0">
              <h1 className="font-heading text-[32px] leading-[40px] lg:text-[52px] lg:leading-[60px]">
                Asia’s largest Color Manufacturing unit, located in Navi Mumbai
              </h1>
              <p className="font-subHeading text-[14px] leading-5 lg:text-[18px] lg:leading-[26px]">
                Our industrial colorant division offers a comprehensive range of
                high-performance pigments and dyes designed to meet the exacting
                demands of various industries.
              </p>
            </div>

            <div className="w-full flex gap-2 lg:gap-8 justify-end items-end ">
              <div className="w-[170px] lg:w-[200px] aspect-square bg-cover bg-center">
                <img src={sidebarImg1} className="w-full "></img>
              </div>
              <div className="w-[250px] lg:w-[300px] aspect-square bg-cover bg-center">
                <img src={sidebarImg2} className="w-full h-full"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
