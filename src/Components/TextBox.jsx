import React from "react";

const TextBox = ({ image, imagePlace, title, desc }) => {
  return (
    <div className={` flex flex-col gap-2 md:text-${imagePlace}`}>
      <div className={`flex md:justify-${imagePlace}`}>
        <img src={image} alt="" />
      </div>
      <h1 className="text-3xl text-[#F2F2F2] font-medium ">{title}</h1>
      <p className="text-sm text-[#F2F2F2] font-medium leading-[120%]">
        {desc}
      </p>
    </div>
  );
};

export default TextBox;
