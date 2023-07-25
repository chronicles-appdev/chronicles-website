import AboutCards from "./AboutCards";
import design from "/design.png";
import { motion as m } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="pt-[520px]">
      <div>
        <div className="absolute right-0 -z-[100000]">
          <img src={design} alt="" className="sm:hidden" />
        </div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 3,
            stiffness: 100,
          }}
          className="flex flex-col items-center"
        >
          <h2 className="font-DM-Sans text-[#28166F] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
            About Us
            <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
          </h2>
          <div>
            <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center flex flex-col gap-[35px] mt-[36px] sm:w-[100%] md:w-[100%]">
              <span>
                <strong className="">
                  Over the years, we have continued to surpass our clients
                  expectations and deliver value in all projects assigned to us.
                </strong>{" "}
              </span>
              <span>
                Chronicles Software Development Company Limited has a track
                record for excellent service delivery and innovative product
                design, and we boast of a rich history of{" "}
                <strong>over fifteen years in the industry.</strong>
              </span>
              <span>
                With over <strong>2.5M users</strong> since inception, in 40
                countries and in 4 continents, Chronicles is fast becoming a
                global company and it’s goal of becoming Africa’s finest
                solution company very much on track.
              </span>
            </p>
          </div>
        </m.div>
      </div>

      <AboutCards />
    </div>
  );
};

export default AboutUs;
