import React from "react";
import Account from "../../Components/Account/Account";
import Banner from "../../Components/Banner/Banner";
import Details from "../../Components/Details/Details";
import Features from "../../Components/Features/Features";
import Pricings from "../../Components/Pricings/Pricings";
import Values from "../../Components/Values/Values";
import VedioSection from "../../Components/VedioSection/VedioSection";

const Home = () => {
  return (
    <div>
      <Banner />

      <Details />

      <div className="bg-[#0F0F0F]">
        <Features />
        <Account />
        <VedioSection />
      </div>
      <Pricings />
      <div className="bg-[#0F0F0F]">
        <Values />
      </div>
    </div>
  );
};

export default Home;
