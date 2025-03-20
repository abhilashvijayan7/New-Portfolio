import React, { useState } from "react";
import FeaturedWorkCard from "../components/FeaturedWorkCard";

import { rect30, rect32, rect34, rect35, rect40 } from "../../src/assets/image";

function WorksPage() {

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
        {
            id: 4,
            image: rect35, 
            title: "Components",
            year: "2018",
            category: "Components, Design",
            description:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          },
          {
            id: 5,
            image: rect40, 
            title: "Designing Landing pages",
            year: "2020",
            category: "Website",
            description:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          },
      ]);

  return (
    <div className='container max-w-[339px] mx-auto text-[#21243D] lg:max-w-[682px]'>
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
