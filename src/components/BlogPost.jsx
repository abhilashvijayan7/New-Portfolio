import React from "react";


const BlogPost = ({ title, date, tags, content }) => {
    return (
      <section className="mt-[18px]">
        <div className="font-normal border-b-1 border-[#E0E0E0]">
          <h2 className=" text-[26px] mb-[5px]">{title}</h2>
          <div className="text-[16px] flex  mb-[17px]">
            <p className="pr-2 border-r border-[#000000]">{date}</p>
            <p className="pl-2 text-[#8695A4]">{tags}</p>
          </div>
          <p className="text-[16px] mb-[24px]">{content}</p>
        </div>
      </section>
    );
  };
export default BlogPost;
