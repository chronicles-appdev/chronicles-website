const Newsletter = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-[200px] w-[750px] h-[344px] py-[40px] px-[100px] bg-royalBlue flex flex-col items-center justify-center sm:w-[100%] sm:h-auto">
        <h3 className="font-bold text-[28px] leading-[45.92px] text-[#FEFEFE] font-DM-Sans text-center">
          Subscribe below to see more of our products/services
        </h3>
        <div className="mt-[29px] ">
          <input
            placeholder="Enter your email address"
            type="text"
            name=""
            id=""
            className=" border-[1px] outline-none border-[#FEFEFE] py-[16px] px-[49px] rounded-[8px] bg-transparent text-[#FEFEFE] font-DM-Sans]"
          />
        </div>
        <button className="mt-[29px] w-[251px] h-[54px] rounded-[15px] py-[14px] px-[81px] bg-[#28166F] text-white font-semibold text-[18px] text-center">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
