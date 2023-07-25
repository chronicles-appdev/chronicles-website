import vision from "/vision.png";
import mission from "/mission.png";
import coporate from "/coporate.png";
import { motion as m } from "framer-motion";
const AboutCards = () => {
  return (
    <div className="mt-[160px]">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          duration: 3,
          stiffness: 100,
        }}
        viewport={{ once: true }}
        className="flex flex-row gap-[70px] items-center justify-between sm:flex-col md:flex-col"
      >
        <div className="flex flex-col items-center justify-center">
          <img src={vision} alt="" className="sm:w-[100%] md:w-[100%]" />

          <div className="bg-[#FAFAFA] rounded-[10px] py-[17px] px-[20px] h-[230px] shadow-2xl sm:w-[100%] md:w-[100%]">
            <h2 className="font-semibold text-[20px] leading-[35.6px]">
              Vision
            </h2>
            <p className="font-normal text-[18px] leading-[30.15px] w-[373px] sm:w-[100%] md:w-[100%]">
              To build a world class solution company employing industry’s best
              practices to offering solutions to clients and creating wealth for
              stakeholders.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src={mission} alt="" className="sm:w-[100%] md:w-[100%]" />

          <div className="bg-[#FAFAFA] rounded-[10px] py-[17px] px-[20px] h-[230px] shadow-2xl sm:w-[100%] md:w-[100%]">
            <h2 className="font-semibold text-[20px] leading-[35.6px]">
              Mission
            </h2>
            <p className="font-normal text-[18px] leading-[30.15px] w-[373px] sm:w-[100%] md:w-[100%]">
              To deliver value by providing innovative software solutions
              without compromising quality for people everywhere.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-end">
            <div className="absolute w-[390px] h-[236px] bg-[#0451AD] -z-40 rounded-tl-[10px] rounded tr-[10px] sm:w-[100%] md:w-[100%]"></div>
            <img src={coporate} alt="" className="sm:w-[100%] md:w-[100%]" />
          </div>

          <div className="bg-[#FAFAFA] rounded-[10px] py-[17px] px-[20px] h-[230px] shadow-2xl sm:w-[100%] md:w-[100%]">
            <h2 className="font-semibold text-[20px] leading-[35.6px]">
              Corporate Ideology
            </h2>
            <p className="font-normal text-[18px] leading-[30.15px] w-[373px] sm:w-[100%] md:w-[100%]">
              To maximize Customer satisfaction, we insist on detailed after
              sales support services to all our valued customers.
            </p>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default AboutCards;
