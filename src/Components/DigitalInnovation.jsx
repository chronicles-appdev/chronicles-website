import AB from "/AB.png";
import sunday from "/sunday.png";
const DigitalInnovation = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#000000] font-bold text-[28px] relative flex flex-col pl-[50px] items-start w-[100%]">
          Digital Innovation
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
      </div>

      <div className="flex flex-row items-center mt-[40px] justify-between gap-[100px] sm:flex-col md:flex-col sm:gap-[15px] md:gap-[15px]">
        <div className="flex flex-col items-center">
          <img src={AB} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Abraham Udoh
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Digital Innovation-Team Lead
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={sunday} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Okeke Sunday
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Technical Support
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalInnovation;
