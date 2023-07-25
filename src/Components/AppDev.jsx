import ali from "/ali.png";
import taiye from "/taiye.png";
import hilary from "/hilary.png";
import abisola from "/abisola.png";
import rectangle from "/rectangle.png";
const AppDev = () => {
  return (
    <div className="mt-[70px] ">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#000000] pl-[100px] font-bold text-[28px] relative flex flex-col items-start w-[100%]">
          Application Development
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
      </div>

      <div className="flex flex-row items-center mt-[40px] justify-evenly sm:flex-col md:flex-col sm:gap-[15px] md:gap-[15px]">
        <div className="flex flex-col items-center">
          <img src={ali} alt="" />
          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Aliu Adedigba
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              App Dev- Team Lead
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={taiye} alt="" />
          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Taiye kadiri
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Web Developer
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={rectangle} alt="" />
          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Seun Odufisan
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              ML Engineer
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={hilary} alt="" />
          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Emujede Hilary
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Web Developer
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={abisola} alt="" />
          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Abisola Dawodu
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Product Designer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDev;
