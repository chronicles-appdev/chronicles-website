import Review from "./Review";

const ClientReview = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#28166f] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Client Reviews
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>

        <div>
          <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%]">
            We have collaborated with a diverse range of companies, including
            government parastatals, all of whom can attest to the excellence of
            our work.
          </p>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default ClientReview;
