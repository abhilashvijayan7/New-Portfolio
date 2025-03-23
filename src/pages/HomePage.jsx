import React, { useState } from "react";
import {
  logo,
  rect30,
  rect32,
  rect34,
  work1,
  work2,
  work3,
  profilepic
} from "../../src/assets/image";
import PostCard from "../components/PostCard";

import FeaturedWorkCard from "../components/FeaturedWorkCard";

function HomePage() {
  const [featuredWorks, setFeaturedWorks] = useState([
    {
      id: 1,
      image: work1,
      title: "Building a Full-Stack MERN Application",
      year: "2024",
      category: "Web Development",
      description:
        "A step-by-step guide to building a full-stack application using MongoDB, Express.js, React, and Node.js, covering authentication, state management, and deployment.",
    },
    {
      id: 2,
      image: work2,
      title: "Mastering API Integration with Fetch & Axios",
      year: "2024",
      category: "JavaScript, API",
      description:
        "Exploring how to efficiently fetch data from REST APIs using Fetch and Axios, handling errors, caching responses, and optimizing performance.",
    },
    {
      id: 3,
      image: work3,
      title: "Optimizing MongoDB Queries for Performance",
      year: "2023",
      category: "Database, NoSQL",
      description:
        "Learn how to structure MongoDB queries, apply indexing, aggregation, and optimize read and write operations for high-performance applications.",
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Mastering MERN Stack: From Setup to Deployment",
      date: "12 Feb 2024",
      category: "Web Development, Full-Stack",
      summary:
        "A comprehensive guide covering MongoDB, Express, React, and Node.js. Learn how to build, optimize, and deploy a full-stack web application step by step.",
    },
    {
      id: 2,
      title: "Best Practices for Writing Clean JavaScript Code",
      date: "15 Mar 2024",
      category: "JavaScript, Code Optimization",
      summary:
        "Explore techniques for writing clean, efficient JavaScript. Learn ES6+ features, modularization, and performance optimization step by step.",
    },
  ]);

  const handleDownloadResume = () => {
    const resumeUrl = "/Abhilsh_M_CV.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.target = "_blank"; 
  link.rel = "noopener noreferrer"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  return (
    <div className="main-container">
      <div className="container max-w-[327px] mx-auto lg:max-w-[854px] lg:mx-auto">
        <section className="profile-section mb-16 ">
          <div className="profile-content lg:flex lg:flex-row-reverse lg:gap-x-9 lg:items-start lg:px-0">
            <div className="profile-image-container flex justify-center  lg:px-0 lg:mt-0 lg:mb-0 lg:flex-shrink-0">
              <img
                src={profilepic}
                alt="Profile"
                className="profile-image mb-[34px] max-w-[174.38px] lg:max-w-[200px] "
              />
            </div>

            <div className="lg:flex flex-col items-start">
              <div className="px-[32px] mb-[21px] lg:p-0">
                <h1 className="profile-heading text-center font-bold text-[32px] text-[#21243D] lg:text-start">
                  Hi, I am Abhilash,
                </h1>
                <h1 className="profile-subheading text-center font-bold text-[32px] lg:text-start">
                  MERN Stack Developer
                </h1>
              </div>

              <p className="profile-description text-center text-[16px] text-[#21243D] mb-[27px] lg:text-start">
                I specialize in building dynamic and scalable web applications
                using MongoDB, Express.js, React, and Node.js. Passionate about
                creating seamless user experiences and writing clean, efficient
                code. Always exploring new technologies and pushing the
                boundaries of web development!
              </p>
              <div className="flex justify-center">
                <button
                  className="download-resume-btn bg-[#FF6464] text-[#FFFFFF] w-[208px] h-[47px] font-medium text-[20px] rounded-[2px] cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#333333] "
                  onClick={handleDownloadResume}
                >
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
              {/* <button className="view-all-btn hidden lg:block lg:text-[#00A8CC]">
                View all
              </button> */}
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

      <section className="featured-projects-section mx-[18px]   lg:flex lg:flex-col lg:gap-y-7">
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
    </div>
  );
}

export default HomePage;
