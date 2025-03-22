import React from "react";

const WorkDetail = ({ title, year, category, description, mainImage, content }) => {
  return (
    <section>
      <div className="container max-w-[339px] mx-auto lg:max-w-[856px] text-[#21243D]">
        <h1 className="font-bold text-[30px] mb-[24px]">{title}</h1>
        <div className="flex items-start mb-[24px]">
          <div className="pt-1">
            <p className="text-white bg-[#FF7C7C] w-[62px] text-center rounded-2xl font-bold mr-3">
              {year}
            </p>
          </div>
          <div>
            <p className="text-[18px] font-normal">{category}</p>
          </div>
        </div>
        <p className="text-[16px] mb-[23px]">{description}</p>
        <img src={mainImage} alt={title} className="mb-[23px]" />
        <div>
          <h2 className="text-[26px] font-medium">{content.heading1}</h2>
          <h3 className="text-[20px] font-medium mb-[5px]">{content.heading2}</h3>
          <p className="text-[16px] font-normal mb-[24px]">{content.text}</p>
          {content.images.map((img, index) => (
            <img key={index} src={img} alt={`content-${index}`} className="mb-[23px]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkDetail;
