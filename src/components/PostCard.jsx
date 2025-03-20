import React from "react";

const PostCard = ({ title, date, category, summary }) => (
  <div className="post-card bg-white mx-[11px] rounded-[4px] p-[21px] mb-[17px] lg:m-0">
    <p className="post-heading font-bold text-[22px]">{title}</p>
    <div className="post-meta font-normal text-[16px] flex mb-[19px] mt-[12px]">
      <p className="post-date border-r border-[#21243D] pr-[24px]">{date}</p>
      <p className="post-category pl-[24px]">{category}</p>
    </div>
    <p className="post-summary">{summary}</p>
  </div>
);

export default PostCard;
