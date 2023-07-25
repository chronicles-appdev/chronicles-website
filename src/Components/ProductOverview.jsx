import ProductCards from "./ProductCards";

const ProductOverview = () => {
  return (
    <div className="pt-[520px]">
      <div className="flex flex-col items-center">
        <h2 className="font-DM-Sans text-[#28166F] font-bold text-[28px] relative flex flex-col items-center w-[100%]">
          Our Products
          <div className="w-[141px] h-[3px] bg-[#28166f] rounded-xl"></div>
        </h2>
        <div>
          <p className="text-[#232323] font-DM-Sans font-normal text-[20px] leading-[40px] w-[571px] text-center mt-[36px] sm:w-[100%] md:w-[100%]">
            At our core, we take immense pride in our ability to develop
            innovative educational technology solutions that enhance the
            learning experience across the continent.
          </p>
        </div>
      </div>

      <ProductCards />
    </div>
  );
};

export default ProductOverview;
