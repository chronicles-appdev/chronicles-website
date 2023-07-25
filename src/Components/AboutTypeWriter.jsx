import { Typewriter } from "react-simple-typewriter";

const AboutTypeWriter = () => {
  return (
    <div>
      <div className="mt-[40px] sm:w-[100%] md:w-[100%]">
        <h1 className="text-center font-DM-Sans text-[40px] font-medium leading-[200%] text-[#232323] sm:text-[30px] md:w-[100%]">
          Meet our team of creators <br /> and world-class
          <span className="text-[#9747FF] font-bold ">
            <Typewriter
              words={[" problem solvers", " talents"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default AboutTypeWriter;
