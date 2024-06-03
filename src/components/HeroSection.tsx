import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import { Link } from "react-router-dom";

import React, { useState } from "react";
function HeroSection() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-main-bg h-auto flex flex-col pt-5 items-center">
      <div className="bg-white flex justify-between items-center p-3 item w-[90%] rounded-xl ">
        <img src={logo} alt="" />
        <div className=" gap-3 hidden md:flex md:mr-15 ">
          <Link to="https://rapisurv.com">Products</Link>

          <Link to="#contact">Contact Us</Link>
        </div>

        <GiHamburgerMenu
          size={30}
          className="block md:hidden"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      <div
        className={`bg-white md:hidden flex  flex-col justify-between items-start p-3 item w-[90%]   mt-2 transition-all duration-100 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link to="https://rapisurv.com">Products</Link>

        <Link to="#contact">Contact Us</Link>
      </div>

      <div className="text-center flex flex-col gap-6 justify-center  w-[80%] md:w-[90%] mt-20   pb-20">
        <div className="px-4 flex justify-center">
          <ol className="flex gap-4 bg-[#FFA77633] justify-center px-6 py-2 rounded-2xl text-white border border-border-color max-w-[256px] md:max-w-[1307.87px]">
            <li>Solution</li>
            <li> Innovation</li>
            <li>People</li>
          </ol>
        </div>

        <p className="text-white text-3xl md:text-7xl font-bold ">
          Enabling Construction and Infrastructure Projects Globally
        </p>

        <p className="text-white font-medium md:text-2xl">
          Providing innovative tools for success and collaboration in the
          industry
        </p>

        <div className="flex justify-center">
          <Button>
            <Link to={"https://rapisurv.com"}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
