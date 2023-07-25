import karo2 from "/karo2.png";
import ola from "/ola.png";
const CorporateStrategy = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#000000] font-bold text-[28px] relative flex flex-col pl-[10px] items-start w-[100%]">
          Corporate Strategy
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
      </div>

      <div className="flex flex-row items-center mt-[40px] justify-evenly gap-[100px] sm:flex-col md:flex-col sm:gap-[15px] md:gap-[15px]">
        <div className="flex flex-col items-center">
          <img src={karo2} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Oghenekaro Okporua
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Operations Manager
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={ola} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Olaoluwa Oluwadun
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Project Manager
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateStrategy;
