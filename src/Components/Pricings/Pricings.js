import React from "react";
import infoImage from "../../assests/icon _info circle_.svg";

const Plans = [
  {
    id: 1,
    title: "Temp lock",
    details: [
      "21 Day DeFi Account.",
      "Holidays, Medical Op etc.",
      "Stable coin friendly USDT, BUSD, USDC (ON BSC NETWORK)",
      "0.2 BNB or 1,300,000 $Tally.",
    ],
  },
  {
    id: 2,
    title: "Living Trusts",
    details: [
      "Lifetime DeFi Account.",
      "Stable coin friendly USDT, BUSD, USDC (ON BSC NETWORK)",
      "0.8 BNB or 5,200,000 $Tally.",
    ],
  },
  {
    id: 3,
    title: "Temp lock",
    details: [
      "Lifetime DeFi Account.",
      "Automated Will Executor.",
      "Stable coin friendly USDT, BUSD, USDC (ON BSC NETWORK)",
      "1 BNB ot 7,200,000 $Tally.",
    ],
  },
];

const Pricings = () => {
  return (
    <div className="w-[95%]  md:w-[75%] mx-auto mt-8 mb-8 md:pt-44 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Plans.map((item) => (
          <div
            key={item.id}
            className={` pt-6 pl-3 pr-[14px] md:pl-6 flex flex-col justify-between items-center rounded-3xl pb-7 md:pr-3 ${
              item.id % 2 === 0
                ? "bg-[#0F0F0F] md:mt-[-51px] md:mb-[51px]"
                : "bg-gray-200 mt-0"
            }`}
          >
            {/* bg-price-plan bg-no-repeat	bg-cover */}
            <div>
              <h2
                className={`text-center md:text-left py-6 text-xl font-semibold ${
                  item.id % 2 === 0 ? "text-[#A2E941]" : "text-black"
                }  `}
              >
                {item.title}
              </h2>
              {item.details.map((data, index) => (
                <ul>
                  <li
                    key={index}
                    className={`text-lg relative before:absolute  before:left-[-25px] ml-[25px] my-6 ${
                      item.id % 2 === 0
                        ? "text-white before:content-greenCheck"
                        : "text-[#0F0F0F] before:content-blackCheck"
                    }`}
                  >
                    {data}
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <h4
                className={`py-6 text-xl font-semibold ${
                  item.id % 2 === 0 ? " text-[#A2E941] " : "text-[#0F0F0F] "
                }`}
              >
                <span className="text-base">1/2</span> Price before 15
                <sup>th</sup> July.
              </h4>
              <p
                className={`text-base capitalize   text-center py-4 px-12 rounded-3xl ${
                  item.id % 2 === 0
                    ? "text-[#0F0F0F] bg-[#A2E941] font-semibold"
                    : "bg-[#0F0F0F] text-[#A2E941]"
                }`}
              >
                <a href="#">create account</a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center mt-12 py-6 pl-8 pr-6 bg-[#0F0F0F] ml-4 mr-2 md:w-[65%] md:mx-auto rounded-r-2xl relative before:absolute before:w-[10px] before:h-full before:bg-[#A2E941] before:left-[-10px] before:top-0 before:rounded-l-2xl">
        <div className="md:ml-4 md:mr-8 mb-4">
          <img src={infoImage} alt="" width={80} />
        </div>
        <div className="text-white">
          <h6 className="ml-2 mb-5 text-lg text-[#A2E941]">
            Credit cards not accepted on Decentralised Platforms.
          </h6>
          <h6 className="ml-2 mb-5  text-lg">
            DeFi Accounts must be purchased in:{" "}
            <span className="text-[#A2E941]">BNB</span> or{" "}
            <span className="text-[#A2E941]">TALLY</span>
          </h6>
          <h6 className="ml-2  text-lg">
            Tally holders receive a percentage of revenue when accounts are
            purchased in <span className="text-[#A2E941]">$Tally</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
