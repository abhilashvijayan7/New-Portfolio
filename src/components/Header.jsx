import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../src/assets/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="container max-w-[370px] mx-auto lg:max-w-[1032px] lg:mx-auto">
      {/* Desktop Navigation */}
      <nav className="navbar hidden lg:block lg:mb-[145px]">
        <ul className="nav-list lg:flex justify-end lg:font-medium lg:text-[20px] lg:space-x-8 lg:pr-[60px] lg:pt-[27px]">
          <li className="nav-item">
            <Link
              to="/"
              className="hover:text-[#FF6464] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/works"
              className="hover:text-[#FF6464] transition-colors duration-300"
            >
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="hover:text-[#FF6464] transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="menu-icon flex justify-end pt-5 pr-4 mb-[33px] pb-1.5 lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <img src={menu} alt="Menu Icon" />
        </button>
      </div>

      {/* Sidebar Navigation for Mobile (White Background, Black Text) */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white text-black p-5 transition-transform duration-300 ease-in-out z-50 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-black text-2xl absolute top-4 right-5"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Navigation Links */}
        <nav className="mt-20 flex justify-center items-center text-center">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-xl font-bold block text-white bg-[#21243D] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF6464] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="text-xl font-bold block text-white bg-[#21243D] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF6464] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-xl font-bold block text-white bg-[#21243D] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF6464] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
