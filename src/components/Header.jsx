import React from "react";
import { Link } from "react-router-dom";

import { menu } from "../../src/assets/image";

const Header = () => {
  return (
    <header className="container max-w-[370px] mx-auto lg:max-w-[1032px] lg:mx-auto">
      <nav className="navbar hidden lg:block lg:mb-[145px]">
        <ul className="nav-list lg:flex justify-end lg:font-medium lg:text-[20px] lg:space-x-8 lg:pr-[60px] lg:pt-[27px]">
        <li className="nav-item"><Link to="/">Home</Link></li>

          <li className="nav-item"><Link to="/works">Works</Link></li>
          <li className="nav-item"><Link to="/blog">Blog</Link></li>
          {/* <li className="nav-item"><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
      <div className="menu-icon flex justify-end pt-5 pr-4 mb-[33px] pb-1.5 lg:hidden">
        <img src={menu} alt="Menu Icon" />
      </div>
    </header>
  );
};

export default Header;
