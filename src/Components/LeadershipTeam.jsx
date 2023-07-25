import folusoPhilips from "/folusoPhilips.png";
import koyejoOluwaTosin from "/koyejoOluwaTosin.png";
import kunbiOgunsola from "/kunbiOgunsola.png";
import opeOgunlade from "/opeOgunlade.png";
const LeadershipTeam = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#000000] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Leadership Team
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
      </div>

      <div className="flex flex-row items-center mt-[40px] justify-evenly sm:flex-col md:flex-col sm:gap-[15px] md:gap-[15px]">
        <div className="flex flex-col items-center">
          <img src={folusoPhilips} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Foluso Philps
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Chairman, Board of directors
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={koyejoOluwaTosin} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Oluwakoyejo Oluwatosin
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Co-Founder/CEO
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={kunbiOgunsola} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Adekunbi Ogunsola
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Co-Founder/COO
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={opeOgunlade} alt="" />

          <div className="flex flex-col items-center">
            <h3 className="font-normal text-[20px] text-[#222222]">
              Opeyemi Ogunlade
            </h3>
            <h2 className="border-[2px] border-[#28166F] border-l-0 border-r-0 border-t-0 px-[10px] rounded-[10px] font-semibold text-[20px] font-DM-Sans text-[#28166F]">
              Co-Founder
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
