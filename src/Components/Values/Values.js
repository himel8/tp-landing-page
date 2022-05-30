import React from "react";
import freeIcon from "../../assests/free.svg";
import reliabilityIcon from "../../assests/reliability.svg";
import safeIcon from "../../assests/safe.svg";
import Footer from "../Footer/Footer";

const data = [
  {
    id: 1,
    title: "free",
    description: "No Fees or Charges on Deposits and Withdrawals.",
    img: freeIcon,
  },
  {
    id: 2,
    title: "safe",
    description: "Seed phrase Loss protection service.",
    img: safeIcon,
  },
  {
    id: 3,
    title: "reliability",
    description: "we have reliable resources to keep your mind rest assured.",
    img: reliabilityIcon,
  },
];
const Values = () => {
  return (
    <div className="w-full  md:w-[75%] mx-auto mt-8 pt-8 pb-8 md:pt-20 md:pb-20 ">
      {/* upper section  */}

      <h2 className="text-3xl font-semibold text-white  px-8 md:px-0 text-center md:text-left">
        Our
        <span className="text-[#A2E941]"> Core Values</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  mt-14">
        {data.map((item, index) => (
          <div key={index} className="mb-12 md:mb-0 md:pr-16 px-8 md:px-0">
            <div className="flex justify-start items-center">
              <img src={item.img} alt="" />
              <h5 className="ml-4 text-white font-medium text-lg capitalize">
                {item.title}
              </h5>
            </div>
            <p
              className={`text-white mt-2 text-base font-normal ${
                item.id % 2 === 0 ? "uppercase" : ""
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* bottom section  */}

      <div className="mx-4 md:mx-8 bg-white mt-8 mb-8 md:mt-48 md:mb-28 py-12 px-4 md:px-14 flex flex-col md:flex-row justify-between items-center rounded-3xl">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-normal tracking-widest mb-6">
            Ready to start Depositing Tokens ?
          </h3>
          <h5 className="text-xl md:text-2xl font-medium mb-6 md:mb-0">
            Why not get started?
          </h5>
        </div>
        <p className="text-base capitalize   text-center py-4 px-16 md:px-12 rounded-3xl font-semibold bg-[#0F0F0F] text-[#A2E941]">
          <a href="#">create account</a>
        </p>
      </div>

      {/* footer section  */}
      <Footer />
    </div>
  );
};

export default Values;
