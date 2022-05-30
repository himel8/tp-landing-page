import React from "react";
import one from "../../assests/features/1.svg";
import ten from "../../assests/features/10.svg";
import two from "../../assests/features/2.svg";
import three from "../../assests/features/3.svg";
import four from "../../assests/features/4.svg";
import five from "../../assests/features/5.svg";
import six from "../../assests/features/6.svg";
import seven from "../../assests/features/7.svg";
import eight from "../../assests/features/8.svg";
import nine from "../../assests/features/9.svg";
import Heading from "../Heading/Heading";

const item1 = [
  {
    title: "not a bank",
    list: [
      { icon: one, name: "nO kYC, no paper work." },
      { icon: two, name: "Users own their account outright." },
      { icon: three, name: "Funds cannot be confiscated." },
    ],
  },
  {
    title: "Freedom Features",
    list: [
      {
        icon: four,
        name: "Allocate tokens to multiple wallets.",
      },
      { icon: five, name: "total removal of funds closes account" },
      { icon: six, name: "No annual fee or charges." },
    ],
  },
];

const item2 = [
  {
    title: "BSC Network",
    list: [
      { icon: seven, name: "Low Gas Fees." },
      {
        icon: eight,
        name: "All stable coins accepted on BSC network.",
      },
      { icon: nine, name: "All Bsc tokens accepted." },
    ],
  },
  {
    title: "Defi Accounts.",
    list: [
      { icon: ten, name: "Living trusts" },
      { icon: ten, name: "taLLY wILLs" },
      { icon: ten, name: "tEMP lOCK" },
    ],
  },
];

const Features = () => {
  return (
    <div className="mt-0 md:mt-[-298px]">
      <div className=" mx-auto w-[80%] pb-8 pt-8 md:pt-[350px] md:pb-24">
        <Heading
          title=""
          colorText="Features"
          subTitle="The safe place For Your Coins."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
          <div className={`mt-0 md:mt-16 relative `}>
            {item1.map((data, index) => (
              <div className="mb-12" key={index}>
                <h3 className="text-left text-[#A2E941] capitalize text-lg mb-3">
                  {data.title}
                </h3>
                {data.list.map((item) => (
                  <div className="flex items-center mb-5 ">
                    <img src={item.icon} alt="" />
                    <p className="text-white text-base font-normal capitalize tracking-wide ml-3">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* image  */}
          <div className="hidden  relative md:flex justify-center items-center before:absolute before:content-feature before:left-[-36%] before:top-[16%] before:h-full before:"></div>
          <div className={`mt-0 md:mt-16 relative `}>
            {item2.map((data, index) => (
              <div className="mb-8" key={index}>
                <h3 className="text-left text-[#A2E941] capitalize text-lg mb-3 md:mb-1">
                  {data.title}
                </h3>
                {data.list.map((item) => (
                  <div className="flex items-center mb-5 ">
                    <img src={item.icon} alt="" />
                    <p className="text-white text-base font-normal capitalize tracking-wide ml-3">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

// ${
//   index % 2 === 0
//     ? "before:absolute before:content-feature before:left-[70%] before:top-[5%] before:h-full before:"
//     : ""
// }
