import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Lag from "/lagosStateLogo.png";
import atlantichall from "/atlantichall.png";
import vivianFowler from "/vivianFowler.png";
import icoba from "/icoba.png";
import littleEinstein from "/littleEinsten.png";
import ckis from "/ckis.png";
import crc from "/crc.png";
import britarch from "/britarch.png";
import sailors from "/sailors.png";
import chalcedony from "/chalcedony.png";
import divineroyal from "/divineroyal.png";
const SchoolClients = () => {
  //   const isSmallDevices = window.innerWidth <= 800;
  //   const isMediumDevices = window.innerWidth >= 1024;

  const splideOptions = {
    perPage: 6,
    // gep:  ? "2rem" : "",
    pagination: false,
    arrows: false,
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#000000] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          School Clients
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>

        <div>
          <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%]">
            Our purpose-driven approach to lifelong learning has helped us form
            a strong network with collaborative schools.
          </p>
        </div>
      </div>

      <div className="mt-[50px]">
        <Splide options={splideOptions}>
          <SplideSlide>
            <div>
              <img src={Lag} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={atlantichall} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={vivianFowler} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={icoba} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={littleEinstein} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={ckis} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={crc} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={britarch} alt="" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div>
              <img src={sailors} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={chalcedony} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <img src={divineroyal} alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default SchoolClients;
