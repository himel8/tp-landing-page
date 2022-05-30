import React from "react";

const Heading = ({ title, colorText, subTitle }) => {
  return (
    <div className="text-center text-white pt-8 pb-16">
      <h2 className=" text-3xl  font-semibold ">
        {title}{" "}
        <span
          className={`relative text-[#A2E941] before:content-headerBg before:absolute  ${
            title === ""
              ? "before:left-[-22px] before:bottom-[-16px]"
              : "before:left-[-84px] before:bottom-[-16px]"
          }`}
        >
          {" "}
          {colorText}
        </span>
      </h2>
      <h4 className="text-xl font-normal mt-2">{subTitle}</h4>
    </div>
  );
};

export default Heading;
