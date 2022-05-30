import React from "react";
import BannerImg from "../../assests/banner-img.png";
import Binance from "../../assests/icon/Binance.svg";
import Bitcoin from "../../assests/icon/Bitcoin.svg";
import Chainlink from "../../assests/icon/Chainlink.svg";
import Cross from "../../assests/icon/cross.svg";
import Dai from "../../assests/icon/DAI.svg";
import Ether from "../../assests/icon/ether.svg";
import Solana from "../../assests/icon/Solana.svg";
import Tether from "../../assests/icon/Tether.svg";
import Logo from "../../assests/icon/TPay.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div className=" flex flex-col md:flex-row justify-between items-center py-8  px-6 md:w-[80%] md:mx-auto md:pt-28 md:pb-[300px]">
        <div className=" flex flex-col items-center md:items-start md:justify-start basis-2/3">
          <img src={Logo} width={80} alt="" />
          <h3 className="text-white capitalize text-2xl md:text-3xl font-semibold my-3 md:my-2">
            taLLY <span className="text-[#A0E641]">pay Defi</span>
          </h3>
          <h2 className="text-white capitalize text-3xl md:text-5xl font-semibold my-6">
            The safe place
            <br /> for Your Coins.
          </h2>
          <div className="flex justify-start items-center flex-wrap ">
            <img src={Bitcoin} alt="" className="mr-3" />
            <img src={Ether} alt="" className="mr-3" />
            <img src={Tether} alt="" className="mr-3" />
            <img src={Binance} alt="" className="mr-3" />
            <img src={Chainlink} alt="" className="mr-3" />
            <img src={Dai} alt="" className="mr-3" />
            <img src={Solana} alt="" className="mr-3" />
            <img src={Cross} alt="" className="mr-3" />
            <p className="text-white font-thin text-xl underline mr-3">
              {" "}
              <a href="#">+1000 More</a>
            </p>
          </div>
          <div className="mt-6">
            <button class="rounded-full bg-[#A2E941] px-[120px] md:px-[120px] py-[16px] text-[#0F0F0F] font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden md:block ml-4">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
