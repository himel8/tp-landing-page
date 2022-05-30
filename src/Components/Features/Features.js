import React from "react";
import featureBg from "../../assests/featuresBg.png";
import Heading from "../Heading/Heading";

const Features = () => {
  return (
    <div className="mt-0 md:mt-[-298px]">
      <div className=" mx-auto w-[80%] pb-8 pt-8 md:pt-[350px] md:pb-24 flex flex-col justify-center items-center">
        <Heading
          title=""
          colorText="Features"
          subTitle="The safe place For Your Coins."
        />
        <img src={featureBg} alt="" />
      </div>
    </div>
  );
};

export default Features;
