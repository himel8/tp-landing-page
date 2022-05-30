import React from "react";

const fakeData = [
  {
    id: 1,
    title: "Similar To Bank Account",
    details: [
      "Free Deposits and Withdrawals.",
      "Total Control over your money.",
    ],
  },
  {
    id: 2,
    title: "Safer than Holding Crypto in Wallet",
    details: [
      "Funds Retrievable even if you lose access to wallet.",
      "Automatically sent to the wallets of beneficiaries.",
    ],
  },
  {
    id: 3,
    title: "Time Lock and reLEASE",
    details: [
      "Free Deposits and Withdrawals.Time release mechanism to multiple wallet addresses on set dates and times.",
    ],
  },
];

const Details = () => {
  return (
    <div className="bg-[#030403] pt-12 pb-16 px-4 w-[90%] mb-4  mx-auto rounded-3xl mt-4 md:w-[95%] md:px-12 md:mt-[-210px] z-1">
      <h2 className="text-white text-center md:text-left font-semibold text-[24px] md:text-[28px]">
        Private, Affordable And Secure Accounts.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {fakeData.map((item) => (
          <div key={item.id} className="pl-2">
            <h2 className="font-['Comfortaa'] text-[#030403] text-[70px] stroke-white	stoke-text">
              {item.id}
            </h2>
            <h6 className="text-[#A2E941] text-lg font-medium mb-5">
              {item.title}
            </h6>
            <ul className="list-disc ml-4">
              {item.details.map((item) => (
                <li className="text-white font-thin text-base my-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
