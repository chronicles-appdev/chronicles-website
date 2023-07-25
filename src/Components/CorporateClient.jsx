/* eslint-disable no-irregular-whitespace */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import learnafrica from "/learnAfrica.png";
import stanbic from "/stanbic.png";
import unified from "/unified.png";
import ogs from "/ogs.png";
import rand from "/rand.png";
import afrinvest from "/afrinvest.png";
import skynet from "/skynet.png";
import access from "/access.png";
import leadway from "/leadway.png";

const CorporateClient = () => {
  const isSmallDevices = window.innerWidth <= 800;

  const splideOptions = {
    perPage: isSmallDevices ? 6 : 6,
    pagination: false,
    arrows: false,
  };
  return (
    <div className="mt-[70px]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#000000] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Corporate Clients
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>

        <div>
          <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%]">
            Our purposeful value creation approach has helped to build a strong
            network of companies.
          </p>
        </div>
      </div>

      <div className="mt-[50px]">
        <Splide options={splideOptions}>
          <SplideSlide>
            <div>
              <img src={learnafrica} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={stanbic} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={unified} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={ogs} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={rand} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={afrinvest} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={skynet} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={leadway} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={access} alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default CorporateClient;
