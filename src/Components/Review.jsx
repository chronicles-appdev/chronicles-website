import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import lagos from "/lagos.png";
import md from "/mdLearnAfrica.png";
const Review = () => {
  return (
    <div>
      <Splide
        options={{
          arrows: false,
        }}
      >
        <SplideSlide>
          <div className="px-[62px] flex flex-col gap-[30px] border-[5px] border-l-[#28166F] border-t-0 border-r-0 border-b-0 mx-[30px] rounded-[4px]">
            <div className="flex flex-row items-center gap-[17px]">
              <img src={lagos} alt="" />
              <div className="flex flex-col items-start gap-[5px]">
                <h3 className="font-semibold text-[18px] font-DM-Sans text-[#000000] sm:whitespace-nowrap">
                  Folashade Adefisayo
                </h3>
                <h3 className="font-normal text-[18px] font-DM-Sans text-[#000000]">
                  Former Comission of Education, Lagos state{" "}
                </h3>
              </div>
            </div>
            <div className="">
              <h5 className="font-semibold text-[20px] leading-[35.6px] text-[#232323] sm:w-[100%]">
                &#34;Working with Chronicles SDC has played a pivotal role in
                helping us scale learning in Lagos state. You know children like
                to learn via IT, so if they like to learn that way, why not
                teach them that way{" "}
              </h5>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="px-[62px] flex flex-col gap-[30px] border-[5px] border-l-[#28166F] border-t-0 border-r-0 border-b-0 mx-[30px] rounded-[4px]">
            <div className="flex flex-row items-center gap-[17px]">
              <img src={md} alt="" />
              <div className="flex flex-col items-start gap-[5px]">
                <h3 className="font-semibold text-[18px] font-DM-Sans text-[#000000]">
                  Bala -Hassan
                </h3>
                <h3 className="font-normal text-[18px] font-DM-Sans text-[#000000]">
                  MD-Learn Africa PLC
                </h3>
              </div>
            </div>
            <div className="">
              <h5 className="font-semibold text-[20px] leading-[35.6px] text-[#232323]">
                &#34;Collaborating with Chronicles SDC has been instrumental in
                driving the growth of our business and propelling us ahead of
                our competitors. Their approach to development was centered
                around the needs of our customers and remarkably
                straightforward.
              </h5>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Review;
