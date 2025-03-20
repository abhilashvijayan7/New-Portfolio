import React from "react";
import { menu } from "../../src/assets/image";

const Header = () => {
  return (
    <header className="container max-w-[370px] mx-auto lg:max-w-[1032px] lg:mx-auto">
      <nav className="navbar hidden lg:block lg:mb-[145px]">
        <ul className="nav-list lg:flex justify-end lg:font-medium lg:text-[20px] lg:space-x-8 lg:pr-[60px] lg:pt-[27px]">
          <li className="nav-item">Works</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <div className="menu-icon flex justify-end pt-5 pr-4 mb-[33px] pb-1.5 lg:hidden">
        <img src={menu} alt="Menu Icon" />
      </div>
    </header>
  );
};

export default Header;
