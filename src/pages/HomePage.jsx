import React, { useState } from "react";
import { logo, rect30, rect32, rect34 } from "../../src/assets/image";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedWorkCard from "../components/FeaturedWorkCard";

function HomePage() {
  const [featuredWorks, setFeaturedWorks] = useState([
    {
      id: 1,
      image: rect30,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      image: rect32,
      title: "Vibrant Portraits of 2020",
      year: "2020",
      category: "Illustration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      image: rect34,
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      summary:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Creating pixel-perfect icons in Figma",
      date: "15 Mar 2020",
      category: "Figma, UI/UX",
      summary:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]);

  return (
    <div className="main-container">
      <Header />
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
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    category={post.category}
                    summary={post.summary}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="featured-projects-section mx-[18px]  mb-[150px]  lg:mb-[83px] lg:flex lg:flex-col lg:gap-y-7">
          <div className="conatiner max-w-[339px] mx-auto lg:max-w-[856px] lg:mx-auto">
            <h2 className="section-title text-center text-[18px] my-6 lg:text-start lg:text-[22px] lg:text-[#21243D]">
              Featured Works
            </h2>

            {featuredWorks.map((work) => (
              <FeaturedWorkCard
                key={work.id}
                image={work.image}
                title={work.title}
                year={work.year}
                category={work.category}
                description={work.description}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
