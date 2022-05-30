import React from "react";

const Heading = ({ title, colorText, subTitle }) => {
  return (
    <div className="text-center text-white pt-8 pb-16">
      <h2 className="text-3xl  font-semibold ">
        {title} <span className="text-[#A2E941]"> {colorText}</span>
      </h2>
      <h4 className="text-xl font-normal mt-2">{subTitle}</h4>
    </div>
  );
};

export default Heading;
