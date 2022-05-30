import React from "react";
import Logo from "../../assests/icon/TPay.svg";
import facebook from "../../assests/social/facebook.svg";
import instagram from "../../assests/social/instagram.svg";
import linkedln from "../../assests/social/linkedln.svg";
import twitter from "../../assests/social/twi.svg";

const menu = [
  {
    title: "service",
    list: [
      { name: "home", link: "#" },
      { name: "tally token", link: "#" },
      { name: "apply to lunch", link: "#" },
    ],
  },
  {
    title: "products",
    list: [
      { name: "exchange", link: "#" },
      { name: "liquidity", link: "#" },
      { name: "farms", link: "#" },
      { name: "pools", link: "#" },
      { name: "analytics", link: "#" },
    ],
  },
  {
    title: "about",
    list: [
      { name: "docs", link: "#" },
      { name: "news", link: "#" },
      { name: "audit", link: "#" },
    ],
  },
];

const socialMenu = [
  { icon: twitter, link: "#" },
  { icon: instagram, link: "#" },
  { icon: facebook, link: "#" },
  { icon: linkedln, link: "#" },
];
const Footer = () => {
  return (
    <div className="mt-20 md:mt-0 mx-10 md:mx-0 grid grid-cols-2 md:grid-cols-5 gap-6">
      <div className="mt-2 md:mt-12">
        <img src={Logo} alt="" />
        <h3 className="text-xl font-semibold text-white my-2">@ 2022</h3>
      </div>
      {menu.map((item) => (
        <div>
          <h3 className="text-white text-xl my-3 font-medium capitalize">
            {item.title}
          </h3>
          {item.list.map((data) => (
            <p className="text-white text-lg my-3 font-thin capitalize">
              <a href={data.link}>{data.name}</a>
            </p>
          ))}
        </div>
      ))}
      <div className="">
        <h3 className="text-white text-2xl my-3 font-medium capitalize mb-6">
          community
        </h3>
        <div className="flex items-center justify-start">
          {socialMenu.map((item) => (
            <a href={item.link} className="mr-4">
              <img src={item.icon} width={50} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
