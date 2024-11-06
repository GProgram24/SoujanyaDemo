import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ApplicationDropdown from "./ApplicationDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track logo and menu color change
  const [isFooterVisible, setIsFooterVisible] = useState(false); // Track when footer is in view

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect footer visibility and handle scroll for logo/menu color change
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector("footer");

      // Ensure footer exists on the page
      if (footer) {
        const footerPosition =
          footer.getBoundingClientRect().top + window.scrollY;
        const footerHeight = footer.offsetHeight;
        const windowHeight = window.innerHeight;

        // Change logo and menu icon after scrolling past 900px
        if (scrollY > 900) {
          setIsScrolled(true); // Change to black logo and black menu icon
        } else {
          setIsScrolled(false); // Keep white logo and white menu icon
        }

        // Change back to white only when a significant portion of the footer is in view
        if (scrollY + windowHeight >= footerPosition + footerHeight * 0.5) {
          setIsFooterVisible(true); // Switch to white when half of the footer is visible
        } else {
          setIsFooterVisible(false); // Keep black logo and menu icon
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const controlHeaderVisibility = () => {
      if (window.scrollY > lastScrollY && !isHoveringTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlHeaderVisibility);
    return () => {
      window.removeEventListener("scroll", controlHeaderVisibility);
    };
  }, [lastScrollY, isHoveringTop]);

  const handleMouseEnterTop = () => {
    setIsHoveringTop(true);
    setIsVisible(true);
  };

  const handleMouseLeaveTop = () => {
    setIsHoveringTop(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnterTop}
        onMouseLeave={handleMouseLeaveTop}
        className="fixed top-0 left-0 w-full h-[20px] z-50"
      ></div>

      <header
        className={`fixed w-full px-5 lg:px-10 h-[62px] z-40 bg-opacity-90 backdrop-blur-lg transition-all duration-300 ${
          isVisible ? "top-0" : "-top-[62px]"
        }`}
      >
        <div className="w-full flex items-center justify-between h-full">
          <div className="text-white flex items-center gap-5">
            <div>
              {/* Conditionally render the menu icon based on scroll and footer position */}
              <button className="w-8" onClick={toggleSidebar}>
                <img
                  src={
                    isFooterVisible
                      ? "/logos/menu.png"
                      : isScrolled
                      ? "/logos/menuBlack.png"
                      : "/logos/menu.png"
                  }
                  alt="menu"
                />
              </button>
            </div>
            {/* Conditionally render the logo based on scroll and footer position */}
            <Link to="/">
              <img
                src={
                  isFooterVisible
                    ? "/logos/NavLogoWhite.svg"
                    : isScrolled
                    ? "/logos/NavLogoBlack.svg"
                    : "/logos/NavLogoWhite.svg"
                }
                className="w-40"
                alt="logo"
              />
            </Link>
          </div>
          <div className="lg:flex gap-12 items-center hidden">
            <div className="flex relative border border-white rounded-md">
              <button
                className={`text-xs font-semibold py-2 px-8 border-r border-white h-full text-white`}
              >
                Browse By Applications
              </button>
              <ApplicationDropdown color="white" />
            </div>
            {/* Removed this search icon temporarily because there is no search functionality available. It is just a static icon. */}
            {/* <div className='cursor-pointer'>
                            <CiSearch className='text-white text-lg' />
                        </div> */}
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
