import React from "react";
import clock from "../../assests/clock.png";
import holdingHand from "../../assests/hand.png";
import sunRise from "../../assests/light.png";
import Heading from "../Heading/Heading";

const data = [
  {
    id: 1,
    title: "Living",
    name: "Trusts Account",
    img: holdingHand,
    details: [
      "Tokens placed in this account can be time locked.",
      "add/remove tokens any time 24/7.",
      "Stable coin friendly USDT,  BUSD, USDC (ON BSC NETWORK).",
      "Tokens released and sent to recipients when time lock expires.",
    ],
  },
  {
    id: 2,
    title: "Tally",
    name: " Wills Account",
    img: sunRise,
    details: [
      "Lock away your tokens by depositing into account.",
      "set multiple wallets.",
      "add/remove tokens any time 24/7.",
      "Tokens released and sent to beneficiaries when triggered.",
      "Stable coin friendly/Compatible with all BSC TOKENS.",
    ],
  },
  {
    id: 3,
    title: "Temp",
    name: "Lock Account",
    img: clock,
    details: [
      "lock Tokens temporarily (Maximum 21 Days).",
      "Set multiple wallets. ",
      "Stable coin friendly USDT,  BUSD, USDC (ON BSC NETWORK).",
      "Tokens released and sent to recipients if time lock expires.",
      "Locked tokens are removable by account owner at any time. 24/7.",
    ],
  },
];

const Account = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <Heading
        title="Defi"
        colorText="Accounts"
        subTitle="The safe place For Your Coins."
      />

      {data.map((item) => (
        <div
          key={item.id}
          className={`  ${item.id % 2 === 1 ? "bg-[#161616]" : "bg-[#0F0F0F]"}`}
        >
          <div
            className={` w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center py-16 ${
              item.id % 2 === 0 ? "md:flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`z-[99] before:z-[-1] relative before:content-[''] before:absolute before:w-full before:h-full md:before:w-[496px] md:before:h-[378px] before:bg-[#405523] before:top-[-20px]  ${
                item.id % 2 === 0
                  ? "before:right-[-20px]"
                  : "before:left-[-20px]"
              }`}
            >
              <img src={item.img} alt="" />
            </div>
            <div>
              <h4 className="text-white capitalize text-lg font-medium tracking-wide my-8 md:my-4">
                {item.title} <span className="text-[#A2E941]">{item.name}</span>
              </h4>
              <ul>
                {item.details.map((data, index) => (
                  <li
                    key={index}
                    className={`text-white relative font-thin text-base my-2 before:content-link before:absolute before:left-[-25px]`}
                  >
                    {data}
                  </li>
                ))}
              </ul>
              <p className="text-[#A2E941] capitalize my-4">
                <a href="#">discover more...</a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Account;
