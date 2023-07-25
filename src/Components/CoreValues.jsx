/* eslint-disable react/no-unescaped-entities */
import coreValueArrow from "/coreValueArrow.png";
import target from "/target.png";
import { motion as m } from "framer-motion";
const CoreValues = () => {
  return (
    <div className="mt-[160px] sm:w-[100%]">
      <m.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 3,
          stiffness: 100,
        }}
        className=""
      >
        <div className="flex flex-col items-center">
          <h2 className="font-DM-Sans text-[#28166F] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
            Core Values
            <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
          </h2>
          <div>
            <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%] md:w-[100%]">
              These set of ethics and principles govern the company's decision
              making and actions, they also serve as the foundation for the
              company culture.
            </p>
          </div>
        </div>

        <div>
          <div className="absolute right-0 -z-[100000]">
            <img src={target} alt="" className="sm:hidden md:hidden" />
          </div>
          <div className="flex flex-col items-center mt-[60px]">
            <div className="flex flex-col gap-[26px]">
              <div className="flex flex-row gap-[18px] items-center">
                <h2 className="font-semibold text-[20px] text-[#28166F] font-DM-Sans">
                  C
                </h2>
                <img src={coreValueArrow} alt="" />
                <h2 className="font-semibold text-[20px] text-[#000000] font-DM-Sans">
                  Customer's Satisfaction
                </h2>
              </div>

              <div className="flex flex-row gap-[18px] items-center">
                <h2 className="font-semibold text-[20px] text-[#28166F] font-DM-Sans">
                  O
                </h2>
                <img src={coreValueArrow} alt="" />
                <h2 className="font-semibold text-[20px] text-[#000000] font-DM-Sans">
                  Open Door Policy
                </h2>
              </div>

              <div className="flex flex-row gap-[18px] items-center">
                <h2 className="font-semibold text-[20px] text-[#28166F] font-DM-Sans">
                  D
                </h2>
                <img src={coreValueArrow} alt="" />
                <h2 className="font-semibold text-[20px] text-[#000000] font-DM-Sans">
                  Dedication of Innovation
                </h2>
              </div>

              <div className="flex flex-row gap-[18px] items-center">
                <h2 className="font-semibold text-[20px] text-[#28166F] font-DM-Sans">
                  E
                </h2>
                <img src={coreValueArrow} alt="" />
                <h2 className="font-semibold text-[20px] text-[#000000] font-DM-Sans">
                  Excellent Solutions
                </h2>
              </div>

              <div className="flex flex-row gap-[18px] items-center">
                <h2 className="font-semibold text-[20px] text-[#28166F] font-DM-Sans">
                  S
                </h2>
                <img src={coreValueArrow} alt="" />
                <h2 className="font-semibold text-[20px] text-[#000000] font-DM-Sans">
                  Service To Humanity
                </h2>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default CoreValues;
