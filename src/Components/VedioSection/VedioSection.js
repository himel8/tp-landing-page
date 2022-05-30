import React from "react";
import ReactPlayer from "react-player";
import Heading from "../Heading/Heading";

const VedioSection = () => {
  return (
    <div className="w-[95%]  md:w-[75%] mx-auto mt-8 mb-8 pb-16 md:pt-12 md:pb-20">
      <div className="flex flex-col justify-center items-center">
        <Heading
          title="Tally"
          colorText="Pay Defi"
          subTitle="The safe place For Your Coins."
        />

        <ReactPlayer
          url="https://www.youtube.com/watch?v=zTitoHKsyJg&ab_channel=VeeWebCode"
          controls={true}
          className="hidden md:block"
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zTitoHKsyJg&ab_channel=VeeWebCode"
          controls={true}
          width="100%"
          height={225}
          className="md:hidden"
        />
      </div>
    </div>
  );
};

export default VedioSection;
