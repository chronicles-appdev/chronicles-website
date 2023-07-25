import send from "/send.png";
import logo from "/logo.png";
import instagram from "/instagram.png";
import facebook from "/facebook.png";
import twitter from "/twitter.png";
import linkedin from "/linkedin.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-otherBlue px-[60px] pt-[41px] mb-[25px]">
        <div className="flex flex-col gap-[24px] border-[1px] border-b-[#000000] pb-[25px]">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <h3 className="font-DM-Sans text-[18px] leading-[30.42px] font-medium text-black w-[450px] sm:w-[100%] md:w-[100%]">
              Leverage Chronicles SDC world-class engineering team to get your
              ideas and projects up and running quickly.
            </h3>
          </div>
          <div className="">
            <Link to="/contact">
              <button className="bg-[#28166F] w-[230px] h-[66px] py-[15px] px-[42px] rounded-[15px] flex flex-row text-white items-center justify-center gap-[10px] sm:w-[100%] md:w-[100%]">
                Contact us{" "}
                <span>
                  <img src={send} alt="" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-end justify-between mt-[25px] pb-[30px] sm:flex-col sm:items-center sm:justify-center sm: gap-[10px]">
          <div className="flex flex-row gap-[135px] sm:gap-[20px]">
            <div className="">
              <h6 className="font-semibold text-[18px] text-[#28166F] font-DM-Sans mb-[22px]">
                Company
              </h6>
              <ul className="flex flex-col gap-[16px]">
                <Link to="/">
                  <li className="font-normal text-[#28166F] text-[16px] font-DM-Sans underline">
                    Home
                  </li>
                </Link>
                <Link to="/products">
                  <li className="font-normal text-[#28166F] text-[16px] font-DM-Sans underline">
                    Products
                  </li>
                </Link>
                <Link to="/about">
                  <li className="font-normal text-[#28166F] text-[16px] font-DM-Sans underline">
                    About Us
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="font-normal text-[#28166F] text-[16px] font-DM-Sans underline">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h6 className="font-semibold text-[18px] text-[#28166F] font-DM-Sans mb-[22px]">
                CONTACT INFORMATION
              </h6>
              <ul className="flex flex-col gap-[16px]">
                <li className="font-normal text-[#232323] text-[16px] font-DM-Sans">
                  19, Joel Ogunnaike Ikeja GRA, Lagos
                </li>
                <li className="font-normal text-[#28166F] text-[16px] font-DM-Sans underline">
                  <Link to="mailto:solutions@chroniclessoft.com">
                    solutions@chroniclessoft.com
                  </Link>
                </li>
                <li className="font-normal text-[#232323] text-[16px] font-DM-Sans">
                  +234 8037699362
                </li>
                <li className="font-normal text-[#232323] text-[16px] font-DM-Sans">
                  +234 9073469391
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-[31px]">
            <div className="bg-[#64A2FF] rounded-full w-[44px] h-[44px] flex items-center justify-center">
              <img src={instagram} alt="" />
            </div>
            <div className="bg-[#64A2FF] rounded-full w-[44px] h-[44px] flex items-center justify-center">
              <img src={facebook} alt="" />
            </div>
            <div className="bg-[#64A2FF] rounded-full w-[44px] h-[44px] flex items-center justify-center">
              <img src={twitter} alt="" />
            </div>
            <div className="bg-[#64A2FF] rounded-full w-[44px] h-[44px] flex items-center justify-center">
              <img src={linkedin} alt="" width={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
