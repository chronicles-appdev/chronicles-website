import Navbar from "./Navbar";
import ProductTypeWriter from "./ProductTypeWriter";

const NavbarWithSemiCircle = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-[405px] bg-[#B3D6FB] rounded-b-[50%] w-[100%]">
        <Navbar />
        <ProductTypeWriter />
      </div>
    </div>
  );
};

export default NavbarWithSemiCircle;
