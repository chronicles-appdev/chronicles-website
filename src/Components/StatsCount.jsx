import CountUp from "react-countup";
const StatsCount = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-between bg-[#28166F] w-[1217px] h-[136px] rounded-[20px] py-[20px] px-[83px] gap-10 mt-[100px] sm:flex-col sm:h-auto sm:items-center sm:justify-between sm:w-[342px] sm:rounded-none md:flex-col md:h-auto md:items-center md:justify-between md:w-[342px] md:rounded">
          <div className="flex flex-col items-center font-semibold text-[30px] font-DM-Sans text-white sm:whitespace-nowrap md:whitespace-nowrap">
            <span>{<CountUp end={10} duration={5} />}M+</span>
            Users
          </div>
          <div className="flex flex-col items-center font-semibold text-[30px] font-DM-Sans text-white whitespace-nowrap sm: w-[10px] sm:whitespace-nowrap md:whitespace-nowrap">
            <span>{<CountUp end={15} duration={5} />}+</span>
            Years of Experience
          </div>
          <div className="flex flex-col items-center font-semibold text-[30px] font-DM-Sans text-white sm:whitespace-nowrap md:whitespace-nowrap">
            <span>{<CountUp end={4} duration={5} />}+</span>
            Continents
          </div>
          <div className="flex flex-col items-center font-semibold text-[30px] font-DM-Sans text-white sm:whitespace-nowrap md:whitespace-nowrap">
            <span>{<CountUp end={20} duration={5} />}+</span>
            Amazing Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCount;
