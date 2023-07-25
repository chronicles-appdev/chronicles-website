import AppDev from "./AppDev";
import BusinessDevelopment from "./BusinessDevelopment";
import CorporateStrategy from "./CorporateStrategy";
import DigitalInnovation from "./DigitalInnovation";

const OurTeam = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#28166F] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Our Team
          <div className="w-[130px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
      </div>

      <BusinessDevelopment />
      <AppDev />

      <div className="flex flex-row justify-evenly mt-[60px] mb-[125px] sm:flex-col md:flex-col">
        <CorporateStrategy />
        <DigitalInnovation />
      </div>
    </div>
  );
};

export default OurTeam;
