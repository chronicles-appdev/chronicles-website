import { Typewriter } from "react-simple-typewriter";

const ProductTypeWriter = () => {
  return (
    <div>
      <div className="mt-[40px] sm:w-[100%] md:w-[100%]">
        <h1 className="text-center font-DM-Sans text-[40px] font-medium leading-[200%] text-[#232323] sm:text-[30px] md:w-[100%]">
          Educational Products for <br />{" "}
          <span className="bg-[#28166F] py-[12px] px-[20px] rounded-[8px] text-white underline">
            <Typewriter
              words={["Exceptional", "Exemplary"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          Results
        </h1>
      </div>
    </div>
  );
};

export default ProductTypeWriter;
