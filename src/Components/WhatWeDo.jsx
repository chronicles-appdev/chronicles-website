import gridImg from "/gridImg.png";
const WhatWeDo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[150px]">
      <div>
        <h3 className="font-DM-Sans font-normal text-[20px] leading-[40px] w-[100%] text-center">
          {" "}
          We provide value solutions to our clients,and build applications that
          <br />
          are tailored to meet their specific needs using the latest
          <br />
          technological models.
        </h3>
      </div>

      <div className="mt-[78px]">
        <img src={gridImg} alt="" className="w-[100%] p-[10px]" />
      </div>
    </div>
  );
};

export default WhatWeDo;
