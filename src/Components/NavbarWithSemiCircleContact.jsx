/* eslint-disable react/no-unescaped-entities */
import Navbar from "./Navbar";

const NavbarWithSemiCircleContact = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-[405px] bg-[#B3D6FB] rounded-b-[50%] w-[100%]">
        <Navbar />

        <div className="mt-[40px] sm:w-[100%] flex flex-col justify-between items-center md:w-[100%]">
          <p className="text-center font-DM-Sans text-[20px] font-medium leading-[200%] text-[#232323] sm:text-[10px] md:w-[100%]">
            Contact Information
          </p>
          <h1 className="text-center font-DM-Sans text-[40px] font-medium leading-[200%] text-[#232323] sm:text-[30px] md:w-[100%]">
            Get In Touch With Us
          </h1>
          <button className="bg-[#28166F] w-[179px] h-[52px] rounded-[8px] py-[18px] px-[45px] text-white font-bold text-[20px] text-center flex items-center justify-between mt-[50px]">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithSemiCircleContact;
