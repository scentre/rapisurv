import logo from "../assets/logo.svg";
import youtube from "../assets/Youtube.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import instagrom from "../assets/Instagram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="mt-20 bg-[#062924] text-white p-12 flex flex-col-reverse md:flex-row gap-10 md:justify-between">
        <div>
          <img src={logo} alt="" />

          <p className="w-52 mb-5 mt-5  text-[#CED7D6]">
            Isekit Technologies Inc, #250 - 997 Seymour St.Vancouver, BC, Canada
            V6B3M1
          </p>
          <p className="w-52 text-[#CED7D6]">
            Isekit Limited,6, Adewunmi Abudu Street,Ajao Estate, Osolo
            way,Isolo, Lagos. Nigeria
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              to={`https://www.linkedin.com/company/isekit 
`}
            >
              <img src={linkedin} alt="" />
            </Link>

            <Link to={`https://www.facebook.com/ISEKITLLC`}>
              <img src={facebook} alt="" />
            </Link>

            <Link to={`https://www.instagram.com/rapisurv/`}>
              <img src={instagrom} alt="" />
            </Link>
            <Link to={`https://www.youtube.com/@rapisurv`}>
              <img src={youtube} alt="" />
            </Link>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-base">Links</h2>
            <p className="text-[#CED7D6] font-light">Announcements</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-base">Products</h2>
            <Link
              className="text-[#CED7D6] font-light"
              to=" https://rapisurv.com"
            >
              Rapisurv
            </Link>
            <Link
              className="text-[#CED7D6] font-light"
              to=" https://rapisurv.ai"
            >
              Rapisurv Ai
            </Link>
          </div>
        </div>
      </div>
      <p className="text-[#CED7D6]  bg-[#062924] p-12 font-light text-sm border-t-[1px] border-[#CED7D6] border-opacity-35">
        Copyright © 2023 All Rights Reserved by Isekit.
      </p>
    </>
  );
};

export default Footer;
