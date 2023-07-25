import Teams from "./Teams";

const OurPeople = () => {
  return (
    <div className="mt-[340px] sm:w-[100%]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#28166F] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Our People
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
        <div>
          <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%] md:w-[100%]">
            <span>
              To be the company our customers want us to be, it takes an
              eclectic group of passionate operators.
            </span>{" "}
            <br />
            <span>
              Get to know the people leading the way at <br />
              <strong>Chronicles Software Development Company</strong>
            </span>
          </p>
        </div>
      </div>

      <Teams />
    </div>
  );
};

export default OurPeople;
