import React from "react";

function FeaturedWorkCard({ image, title, year, category, description }) {
  return (
    <div className="project-wrapper border-b border-[#E0E0E0] mb-4 pb-4 lg:flex lg:items-stretch lg:gap-x-5 lg:mt-3 lg:pb-4">
      <div className="project-image-container lg:w-[246px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="project-image w-full h-full object-cover"
        />
      </div>
      <div className="project-details flex-1 flex flex-col">
        <p className="project-title font-bold text-[24px] my-[16px] lg:mt-0">
          {title}
        </p>
        <div className="project-meta flex mb-[25px]">
          <p className="project-year bg-[#142850] w-[62px] text-white text-center rounded-[16px] font-bold mr-[22px] text-[16px]">
            {year}
          </p>
          <p className="project-category text-[#8695A4] text-[16px] font-normal">
            {category}
          </p>
        </div>
        <p className="project-description text-[16px] flex-grow">{description}</p>
      </div>
    </div>
  );
}

export default FeaturedWorkCard;
