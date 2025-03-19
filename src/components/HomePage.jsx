import React from "react";
import logo from "../../src/images/Ellipse 1.png";
import Rectangle_30 from "../../src/images/Rectangle 30.png";
import Rectangle_32 from "../../src/images/Rectangle 32.png";
import Rectangle_34 from "../../src/images/Rectangle 34.png";

import Social_Icon_1 from "../../src/images/fb.png";
import Social_Icon_2 from "../../src/images/insta.png";
import Social_Icon_3 from "../../src/images/Group.png";
import Social_Icon_4 from "../../src/images/Linkedin.png";
import menu from "../../src/images/menu.png";

function HomePage() {
  return (
    <div className="main-container">
      <header className="container max-w-[370px] mx-auto lg:max-w-[1032px] lg:mx-auto">
        <nav className="navbar hidden lg:block lg:mb-[145px]">
          <ul className="nav-list lg:flex justify-end lg:font-medium lg:text-[20px] lg:space-x-8 lg:pr-[60px] lg:pt-[27px]">
            <li className="nav-item">Works</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">Contact</li>
          </ul>
          
        </nav>
        <div className="menu-icon flex justify-end pt-5 pr-4 mb-[33px] pb-1.5 lg:hidden">
          <img src={menu} alt="" />
        </div>
      </header>
      <main>
       
        <div className="container max-w-[327px] mx-auto lg:max-w-[854px] lg:mx-auto">
          <section className="profile-section mb-16 ">
            <div className="profile-content lg:flex lg:flex-row-reverse lg:gap-x-9 lg:items-start lg:px-0">
              <div className="profile-image-container flex justify-center  lg:px-0 lg:mt-0 lg:mb-0 lg:flex-shrink-0">
                <img
                  src={logo}
                  alt="Profile"
                  className="profile-image mb-[34px] max-w-[174.38px] lg:max-w-[200px]"
                />
              </div>

              <div className="lg:flex flex-col items-start">
                <div className="px-[32px] mb-[21px] lg:p-0">
                  <h1 className="profile-heading text-center font-bold text-[32px] text-[#21243D] lg:text-start">
                    Hi, I am John,
                  </h1>
                  <h1 className="profile-subheading text-center font-bold text-[32px] lg:text-start">
                    Creative Technologist
                  </h1>
                </div>

                <p className="profile-description text-center text-[16px] text-[#21243D] mb-[27px] lg:text-start">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="flex justify-center">
                  <button className="download-resume-btn bg-[#FF6464] text-[#FFFFFF] w-[208px] h-[47px] font-medium text-[20px] rounded-[2px]">
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="recent-posts-section bg-[#EDF7FA] text-[#21243D] ">
          <div className="container max-w-[357px] mx-auto lg:max-w-[856px] lg:mx-auto">
            <div className="post-container pb-[38px]  lg:pb-[33px]">
              <div className="post-header lg:flex lg:justify-between">
                <p className="post-title text-center text-[18px] font-normal py-5 lg:text-[22px]">
                  Recent Posts
                </p>
                <button className="view-all-btn hidden lg:block lg:text-[#00A8CC]">
                  View all
                </button>
              </div>
              <div className="lg:flex lg:gap-x-3">
                <div className="post-card bg-white mx-[11px] rounded-[4px] p-[21px] mb-[17px] lg:m-0">
                  <p className="post-heading  font-bold text-[22px]">
                    Making a design system from scratch
                  </p>
                  <div className="post-meta font-normal text-[16px] flex mb-[19px] mt-[12px]">
                    <p className="post-date border-r border-[#21243D] pr-[24px] ">
                      12 Feb 2020
                    </p>
                    <p className="post-category pl-[24px]">Design, Pattern</p>
                  </div>
                  <p className="post-summary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>

                <div className="post-card bg-white mx-[11px] rounded-[4px] p-[21px] mb-[17px] lg:m-0">
                  <p className="post-heading  font-bold text-[22px]">
                    Making a design system from scratch
                  </p>
                  <div className="post-meta font-normal text-[16px] flex mb-[19px] mt-[12px]">
                    <p className="post-date border-r border-[#21243D] pr-[24px] ">
                      12 Feb 2020
                    </p>
                    <p className="post-category pl-[24px]">Design, Pattern</p>
                  </div>
                  <p className="post-summary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-projects-section mx-[18px]  mb-[150px]  lg:mb-[83px] lg:flex lg:flex-col lg:gap-y-7">
          <div className="conatiner max-w-[339px] mx-auto lg:max-w-[856px] lg:mx-auto">
            <h2 className="section-title text-center text-[18px] my-6 lg:text-start lg:text-[22px] lg:text-[#21243D]">
              Featured Works
            </h2>

            <div className="project-wrapper border-b border-[#E0E0E0] mb-4 lg:flex lg:items-start lg:gap-x-5 lg:mt-3">
              <div className="project-image-container ">
                <img
                  src={Rectangle_30}
                  alt="Dashboard Design"
                  className="project-image w-full lg:min-w-[246px] "
                />
              </div>
              <div className="project-details mb-5">
                <p className="project-title font-bold text-[24px] my-[16px] lg:mt-0">
                  Designing Dashboards
                </p>
                <div className="project-meta flex mb-[25px]">
                  <p className="project-year bg-[#142850] w-[62px] text-white text-center rounded-[16px] font-bold mr-[22px] text-[16px]">
                    2020
                  </p>
                  <p className="project-category text-[#8695A4] text-[16px] font-normal">
                    Dashboard
                  </p>
                </div>
                <p className="project-description text-[16px] ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="project-wrapper border-b border-[#E0E0E0] mb-4 lg:flex lg:items-start lg:gap-x-5 lg:mt-3">
              <div className="project-image-container ">
                <img
                  src={Rectangle_32}
                  alt="Dashboard Design"
                  className="project-image w-full lg:min-w-[246px] "
                />
              </div>
              <div className="project-details mb-5">
                <p className="project-title font-bold text-[24px] my-[16px] lg:mt-0">
                  Designing Dashboards
                </p>
                <div className="project-meta flex mb-[25px]">
                  <p className="project-year bg-[#142850] w-[62px] text-white text-center rounded-[16px] font-bold mr-[22px] text-[16px]">
                    2020
                  </p>
                  <p className="project-category text-[#8695A4] text-[16px] font-normal">
                    Dashboard
                  </p>
                </div>
                <p className="project-description text-[16px] ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="project-wrapper border-b border-[#E0E0E0] mb-4 lg:flex lg:items-start lg:gap-x-5 lg:mt-3">
              <div className="project-image-container ">
                <img
                  src={Rectangle_34}
                  alt="Dashboard Design"
                  className="project-image w-full lg:min-w-[246px] "
                />
              </div>
              <div className="project-details mb-5">
                <p className="project-title font-bold text-[24px] my-[16px] lg:mt-0">
                  Designing Dashboards
                </p>
                <div className="project-meta flex mb-[25px]">
                  <p className="project-year bg-[#142850] w-[62px] text-white text-center rounded-[16px] font-bold mr-[22px] text-[16px]">
                    2020
                  </p>
                  <p className="project-category text-[#8695A4] text-[16px] font-normal">
                    Dashboard
                  </p>
                </div>
                <p className="project-description text-[16px] ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer flex flex-col items-center justify-center min-h-full py-[54px] lg:pt-0">
        <div className="lg:flex lg:flex-col lg:items-center">
          <div className="footer-icons flex  space-x-11 mb-[26px] lg:space-x-8">
            <img
              src={Social_Icon_1}
              alt="Social Icon 1"
              className="footer-icon lg:w-6 lg:h-6"
            />
            <img
              src={Social_Icon_2}
              alt="Social Icon 2"
              className="footer-icon lg:w-6 lg:h-6"
            />
            <img
              src={Social_Icon_3}
              alt="Social Icon 3"
              className="footer-icon lg:w-6 lg:h-6"
            />
            <img
              src={Social_Icon_4}
              alt="Social Icon 4"
              className="footer-icon lg:w-6 lg:h-6"
            />
          </div>

          <p className="footer-text text-center text-gray-600 lg:text-sm">
            Copyright &copy; 2020 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
