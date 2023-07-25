/* eslint-disable react/no-unescaped-entities */
import heroImg1 from "/heroImg1.png";
import heroImg2 from "/heroImg2.png";
import heroImg3 from "/heroImg3.png";
import send from "/send.png";
import vector from "/vector.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../index.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          type: "loop",
          speed: 1000,
          pagination: true,
          arrows: false,
        }}
      >
        <SplideSlide>
          <div className="flex flex-row justify-between items-center mt-[56.74px] sm:flex-col sm:justify-start sm:items-start sm:gap-10 md:flex-col md:justify-start md:items-start md:gap-10">
            <div className="flex flex-col justify-start pl-[91px] sm:pl-[20px] md:pl-[20px]">
              <div className="w-[204px] h-[53px] rounded-[8px] px-[15px] py-[10px] bg-[#FCD503] flex items-center sm:mb-[20px]">
                <h2 className="font-semibold text-[16px]">
                  Solution Development
                </h2>
              </div>
              <div>
                <span className="relative">
                  <img
                    src={vector}
                    alt=""
                    className="pl-[326px] mb-[-51px] max-w-[100%]"
                  />
                </span>
                <h1 className="font-DM-Sans font-bold text-[48px] leading-[85.28px] w-auto">
                  We are building
                  <br /> <span className="text-[#007bff]">Africa's Finest</span>
                  <br /> Solution Company
                </h1>
              </div>
              <p className="font-DM-Sans font-medium text-[18px] text-[#000000] leading-[31.68px]">
                Harness the expertise of Chronicles SDC's <br />
                engineering team to transform your ideas into reality.
              </p>
              <Link to="/contact">
                <button className="w-[284.26px] h-[68px] rounded-[30px] px-[64px] py-[8px] bg-[#28166f] text-white flex items-center gap-[10px] font-DM-Sans font-semibold text-[20px] leading-[35.6px] mt-[32px]">
                  Contact Us{" "}
                  <span>
                    <img src={send} alt="" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="pr-[119px] sm:flex sm:items-center sm:p-[10px]">
              <img src={heroImg1} alt="" className="sm:w-[100%]" />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-row justify-between items-center mt-[56.74px] sm:flex-col sm:justify-start sm:items-start sm:gap-10 md:flex-col md:justify-start md:items-start md:gap-10">
            <div className="flex flex-col justify-start pl-[91px] sm:pl-[20px] md:pl-[20px]">
              <div className="w-[204px] h-[53px] rounded-[8px] px-[15px] py-[10px] bg-[#FCD503] flex items-center sm:mb-[20px]">
                <h2 className="font-semibold text-[16px]">
                  Solution Development
                </h2>
              </div>
              <div>
                {/* <span className="relative">
                  <img src={vector} alt="" className="pl-[326px] mb-[-51px]" />
                </span> */}
                <h1 className="font-DM-Sans font-bold text-[48px] leading-[85.28px] w-auto">
                  We help Organizations
                  <br /> transform thier ideas
                  <br /> into{" "}
                  <span className="text-[#007bff]">value products</span>
                </h1>
              </div>
              <p className="font-DM-Sans font-medium text-[18px] text-[#000000] leading-[31.68px]">
                Over the last 15 years, we have taken our clients ideas <br />
                from concept to market in record time.
              </p>
              <Link to="/products">
                <button className="w-[284.26px] h-[68px] rounded-[30px] px-[64px] py-[8px] bg-[#28166f] text-white flex items-center gap-[10px] font-DM-Sans font-semibold text-[20px] leading-[35.6px] mt-[32px]">
                  Learn more{" "}
                  <span>
                    <img src={send} alt="" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="pr-[119px] sm:flex sm:items-center sm:p-[10px]">
              <img src={heroImg2} alt="" className="sm:w-[100%]" />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-row justify-between items-center mt-[56.74px] sm:flex-col sm:justify-start sm:items-start sm:gap-10 md:flex-col md:justify-start md:items-start md:gap-10">
            <div className="flex flex-col justify-start pl-[91px] sm:pl-[20px] md:pl-[20px]">
              <div className="w-[204px] h-[53px] rounded-[8px] px-[15px] py-[10px] bg-[#FCD503] flex items-center sm:mb-[20px]">
                <h2 className="font-semibold text-[16px]">
                  Solution Development
                </h2>
              </div>
              <div>
                {/* <span className="relative">
                  <img src={vector} alt="" className="pl-[326px] mb-[-51px]" />
                </span> */}
                <h1 className="font-DM-Sans font-bold text-[48px] leading-[85.28px] w-auto">
                  Our <span className="text-[#007bff]">Edu-tech</span> solutions
                  <br /> inspire the next
                  <br /> generation to excel
                </h1>
              </div>
              <p className="font-DM-Sans font-medium text-[18px] text-[#000000] leading-[31.68px]">
                We are revolutionizing learning to build a brighter <br />
                future for the younger generation.
              </p>
              <Link to="/products">
                <button className="w-[284.26px] h-[68px] rounded-[30px] px-[64px] py-[8px] bg-[#28166f] text-white flex items-center gap-[10px] font-DM-Sans font-semibold text-[20px] leading-[35.6px] mt-[32px]">
                  Learn more{" "}
                  <span>
                    <img src={send} alt="" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="pr-[119px] sm:flex sm:items-center sm:p-[10px]">
              <img src={heroImg3} alt="" className="sm:w-[100%]" />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
