import ContactForm from "./ContactForm";
import arrow from "/arrow.png";
import email from "/email.png";
import phone from "/phone.png";
import { motion as m } from "framer-motion";
const ContactOverview = () => {
  const bounceAnimation = {
    y: [0, -50, 0], // Y positions for the bouncing effect
    transition: {
      duration: 1, // Duration of each animation cycle (in seconds)
      repeat: Infinity, // Infinite loop
    },
  };
  return (
    <div className="pt-[450px] px-[60px] mb-[141px] w-[100%]">
      <div className="flex flex-row sm:flex-col md:flex-col">
        <div className="">
          <m.img src={arrow} alt="" animate={bounceAnimation} />

          <div className="flex flex-row gap-[85px] w-[100%] sm:flex-col md:flex-col">
            <div className="flex flex-col gap-[38px]">
              <div className="flex flex-row items-center w-[500px] gap-[19px] bg-otherBlue2 rounded-[20px] py-[20px] px-[36px] sm:w-[100%] sm:px-[5px] sm:gap-[0px] md:w-[100%]">
                <img src={email} alt="" />
                <div className="">
                  <h3 className="font-semibold text-[18px] font-DM-Sans sm:w-[100%] md:w-[100%]">
                    Email Address
                  </h3>
                  <p className="sm:w-[100%] md:w-[100%] sm:text-[15px]">
                    solutions@chroniclesoft.com
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center w-[500px] gap-[19px] bg-otherBlue2 rounded-[20px] py-[20px] px-[36px] sm:w-[auto] md:w-[100%]">
                <img src={phone} alt="" />
                <div className="">
                  <h3 className="font-semibold text-[18px] font-DM-Sans sm:w-[100%] md:w-[100%]">
                    Phone Number
                  </h3>
                  <p className="sm:w-[100%] md:w-[100%] sm:text-[15px]">
                    +234 8037699362
                  </p>
                  <p className="sm:w-[100%] md:w-[100%] sm:text-[15px]">
                    +234 9073469391
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center w-[500px] gap-[19px] bg-otherBlue2 rounded-[20px] py-[20px] px-[36px] sm:w-[100%] md:w-[100%]">
                <img src={email} alt="" />
                <div className="">
                  <h3 className="font-semibold text-[18px] font-DM-Sans sm:w-[100%] md:w-[100%]">
                    Location
                  </h3>
                  <p>19, joel ogunnaike street, Ikeja GRA, Lagos.</p>
                </div>
              </div>
            </div>

            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOverview;
