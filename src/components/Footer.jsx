import React from "react";
import {
  fbIcon,
  instaIcon,
  linkedinIcon,
  groupIcon,
} from "../../src/assets/image";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center justify-center min-h-full py-[54px] lg:pt-0">
      <div className="lg:flex lg:flex-col lg:items-center">
        <div className="footer-icons flex space-x-11 mb-[26px] lg:space-x-8">
          <img
            src={fbIcon}
            alt="Facebook"
            className="footer-icon lg:w-6 lg:h-6"
          />
          <img
            src={instaIcon}
            alt="Instagram"
            className="footer-icon lg:w-6 lg:h-6"
          />
          <img
            src={groupIcon}
            alt="Group"
            className="footer-icon lg:w-6 lg:h-6"
          />

          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="footer-icon lg:w-6 lg:h-6"
          />
        </div>
        <p className="footer-text text-[#21243D]">
          © 2024 John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
