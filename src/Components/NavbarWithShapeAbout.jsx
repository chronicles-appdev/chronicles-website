import AboutTypeWriter from "./AboutTypeWriter";
import Navbar from "./Navbar";

const NavbarWithShapeAbout = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-[#B3D6FB] w-[100%] h-[300px]">
        <div className="absolute top-0 left-0 h-[400px] bg-[#B3D6FB] rounded-b-[50%] w-[100%]">
          <Navbar />
          <AboutTypeWriter />
        </div>
      </div>
    </div>
  );
};

export default NavbarWithShapeAbout;
