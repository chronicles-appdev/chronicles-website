import successboxImgsmall from "/successboxImgsmall.png";
import successboxImgv2small from "/successboxImgv2small.png";
import successboxImg from "/successboxImg.png";
import successboxImgv2 from "/successboxImgv2.png";
import sendBlack from "/sendBlack.png";
import successTab from "/successTab.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const OurProducts = () => {
  const [ishoveredSuccessBox, setIsHoveredSuccessBox] = useState(false);
  const [ishoveredSuccessBoxv2, setIsHoveredSuccessBoxv2] = useState(false);

  const handleMouseEnterSuccessBox = () => {
    setIsHoveredSuccessBox(true);
  };

  const handleMouseLeaveSuccessBox = () => {
    setIsHoveredSuccessBox(false);
  };
  const handleMouseEnterSuccessBoxv2 = () => {
    setIsHoveredSuccessBoxv2(true);
  };

  const handleMouseLeaveSuccessBoxv2 = () => {
    setIsHoveredSuccessBoxv2(false);
  };
  return (
    <div className="mt-[150px] sm:w-[100%]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#28166F] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Our Products
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
        <div>
          <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%] md:w-[100%]">
            We pride ourselves in building innovative educational technology as
            well as fintech products
          </p>
        </div>
      </div>

      <div className="px-[70px] py-[100px] flex flex-col items-center sm:w-[100%] md:w-[100%]">
        <div className="flex flex-row gap-[16px] items-center justify-center sm:flex-col sm:w-[100%] md:flex-col md:w-[100%]">
          <div
            onMouseEnter={handleMouseEnterSuccessBox}
            onMouseLeave={handleMouseLeaveSuccessBox}
          >
            {ishoveredSuccessBox ? (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  stiffness: 100,
                }}
                className="w-[423px] h-[470px] rounded-[10px] py-[30px] px-[20px] gap-[30px] bg-[#F1F8FF] flex flex-col items-center justify-center shadow-xl sm:w-[100%] md:w-[100%]"
              >
                <div>
                  <img src={successboxImg} alt="" />
                </div>

                <Link to="/products">
                  <button className="mt-[30px] w-[200px] h-[53px] rounded-[8px] border-2 border-b-[#232323] border-t-0 border-l-0 border-r-0 p-[10px] flex flex-row items-center justify-center gap-[5px] font-semibold text-[16px] text-[#232323]">
                    Learn More{" "}
                    <span>
                      <img src={sendBlack} alt="" />
                    </span>
                  </button>
                </Link>
              </m.div>
            ) : (
              <div className="w-[423px] h-[443px] flex flex-col items-center py-[47px] px-[20px] gap-[30px] sm:w-[100%] md:w-[100%]">
                <div className="flex flex-col items-center">
                  <img src={successboxImgsmall} alt="" />
                  <p className="text-[20px] font-bold text-[#28166F]">
                    SuccessBox
                  </p>
                </div>
                <div className="mt-[30px]">
                  <h4 className="text-center font-semibold text-[16px] leading-[32.96px] text-[#232323]">
                    Our SuccessBOX study mobile application offers students a
                    platform to practice seamlessly for JAMB and WAEC. It covers
                    all subjects approved by the Nigerian Ministry of Education,{" "}
                  </h4>
                </div>
                <Link to="/products">
                  <button className="mt-[30px] w-[200px] h-[53px] rounded-[8px] border-2 border-b-[#232323] border-t-0 border-l-0 border-r-0 p-[10px] flex flex-row items-center justify-center gap-[5px] font-semibold text-[16px] text-[#232323]">
                    Learn More{" "}
                    <span>
                      <img src={sendBlack} alt="" />
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="w-[423px] h-[470px] rounded-[10px] py-[30px] px-[20px] gap-[30px] bg-[#F1F8FF] flex flex-col items-center justify-center shadow-xl sm:w-[100%] md:w-[100%]">
            <div>
              <img src={successTab} alt="" />
            </div>

            <Link to="/products">
              <button className="mt-[30px] w-[200px] h-[53px] rounded-[8px] border-2 border-b-[#232323] border-t-0 border-l-0 border-r-0 p-[10px] flex flex-row items-center justify-center gap-[5px] font-semibold text-[16px] text-[#232323]">
                Learn More{" "}
                <span>
                  <img src={sendBlack} alt="" />
                </span>
              </button>
            </Link>
          </div>

          <div
            onMouseEnter={handleMouseEnterSuccessBoxv2}
            onMouseLeave={handleMouseLeaveSuccessBoxv2}
            className="transition duration-100 ease-in-out"
          >
            {ishoveredSuccessBoxv2 ? (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  stiffness: 100,
                }}
                className="w-[423px] h-[470px] rounded-[10px] py-[30px] px-[20px] gap-[30px] bg-[#F1F8FF] flex flex-col items-center justify-center shadow-xl sm:w-[100%] md:w-[100%]"
              >
                <div>
                  <img src={successboxImgv2} alt="" className="w-[274px]" />
                </div>

                <Link to="/products">
                  <button className="mt-[30px] w-[200px] h-[53px] rounded-[8px] border-2 border-b-[#232323] border-t-0 border-l-0 border-r-0 p-[10px] flex flex-row items-center justify-center gap-[5px] font-semibold text-[16px] text-[#232323]">
                    Learn More{" "}
                    <span>
                      <img src={sendBlack} alt="" />
                    </span>
                  </button>
                </Link>
              </m.div>
            ) : (
              <div className="w-[423px] h-[443px] flex flex-col items-center py-[47px] px-[20px] gap-[30px] sm:w-[100%] md:w-[100%]">
                <div className="flex flex-col items-center">
                  <img src={successboxImgv2small} alt="" />
                  <p className="text-[20px] font-bold text-[#28166F]">
                    SuccessBox V2
                  </p>
                </div>
                <div className="mt-[30px]">
                  <h4 className="text-center font-semibold text-[16px] leading-[32.96px] text-[#232323]">
                    SuccessBox (V2) offers an all-in-one solution that
                    integrates AI assistance into your learning journey.
                  </h4>
                </div>
                <Link to="/products">
                  <button className="mt-[30px] w-[200px] h-[53px] rounded-[8px] border-2 border-b-[#232323] border-t-0 border-l-0 border-r-0 p-[10px] flex flex-row items-center justify-center gap-[5px] font-semibold text-[16px] text-[#232323] ">
                    Learn More{" "}
                    <span>
                      <img src={sendBlack} alt="" />
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <Link to="/products">
          <button className="mt-[62px] w-[413px] h-[79px] rounded-[20px] py-[25px] px-[120px] bg-[#28166f] font-semibold text-[24px] text-center text-[#FCFCFC] flex items-center sm:w-[100%] md:w-[100%] sm:whitespace-nowrap sm:p-[40px]">
            More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
