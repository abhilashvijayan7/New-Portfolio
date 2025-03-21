import React, { useState } from "react";
import FeaturedWorkCard from "../components/FeaturedWorkCard";

import { rect30, rect32, rect34, rect35, rect40 } from "../../src/assets/image";

function WorksPage() {

    const [featuredWorks, setFeaturedWorks] = useState([
        {
            id: 1,
            image: rect30,
            title: "Building a Full-Stack MERN Application",
            year: "2024",
            category: "Web Development",
            description:
              "A step-by-step guide to building a full-stack application using MongoDB, Express.js, React, and Node.js, covering authentication, state management, and deployment.",
          },
          {
            id: 2,
            image: rect32,
            title: "Mastering API Integration with Fetch & Axios",
            year: "2024",
            category: "JavaScript, API",
            description:
              "Exploring how to efficiently fetch data from REST APIs using Fetch and Axios, handling errors, caching responses, and optimizing performance.",
          },
          {
            id: 3,
            image: rect34,
            title: "Optimizing MongoDB Queries for Performance",
            year: "2023",
            category: "Database, NoSQL",
            description:
              "Learn how to structure MongoDB queries, apply indexing, aggregation, and optimize read and write operations for high-performance applications.",
          },
          {
            id: 4,
            image: rect35,
            title: "Reusable React Components & Best Practices",
            year: "2023",
            category: "React, Frontend",
            description:
              "Creating modular and reusable React components using best practices such as props, state management, context API, and performance optimizations.",
          },
          {
            id: 5,
            image: rect40,
            title: "Building a Scalable Node.js Backend",
            year: "2024",
            category: "Backend, Node.js",
            description:
              "Architecting a scalable and maintainable Node.js backend using Express, middleware, JWT authentication, and database connections with MongoDB.",
          },
      ]);

  return (
    <div className='container max-w-[339px] mx-auto text-[#21243D] lg:max-w-[782px]'>
      <h1 className='text-[30px] font-bold mb-[18px]'>Work</h1>
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
  )
}

export default WorksPage
