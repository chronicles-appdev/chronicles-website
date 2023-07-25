/* eslint-disable react/prop-types */
import logo from "/logo.png";
import { motion as m } from "framer-motion";
import send from "/send.png";
import hamburger from "/hamburger.png";
import { Link, NavLink, useMatch } from "react-router-dom";
import { useState } from "react";
import x from "/x.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuToggle = () => {
    setMenu(!menu);
  };
  const IsActiveLink = (path) => {
    const match = useMatch(path);
    return match
      ? "font-DM-Sans font-bold text-[16px] text-[#28166F] hover:font-bold cursor-pointer"
      : "font-DM-Sans font-normal text-[16px] text-[#232323] hover:text-[#28166F] hover:font-bold cursor-pointer ";
  };
  const IsActiveLinkResponsive = (path) => {
    const match = useMatch(path);
    return match
      ? "font-DM-Sans font-bold text-[16px] text-[#28166F] hover:font-bold cursor-pointer underline"
      : "font-DM-Sans font-normal text-[16px] text-[#232323] hover:text-[#28166F] hover:font-bold cursor-pointer ";
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div>
      <nav>
        <m.div
          animate={menu ? "open" : "closed"}
          variants={variants}
          className={
            menu
              ? "absolute h-[364px] w-[100%] shadow-2xl bg-white z-[10000000]"
              : "hidden"
          }
        >
          <button
            className="border-[1px] border-black p-[5px] rounded-[7px] float-right mr-[17px] mt-[16px]"
            onClick={menuToggle}
          >
            <img src={x} alt="" />
          </button>

          <div className="mt-[51px] flex flex-col items-center gap-[50px]">
            <NavLink to="/" className={`${IsActiveLinkResponsive("/")}`}>
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={`${IsActiveLinkResponsive("/products")}`}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={`${IsActiveLinkResponsive("/about")}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={`${IsActiveLinkResponsive("/contact")}`}
            >
              Contact Us
            </NavLink>
          </div>
        </m.div>

        <div className="px-[56px] py-[12px] w-[100%]">
          <div className="flex flex-row justify-between items-center z-[10000]">
            {/* LOGO */}
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>

            {/* NAV LinkS */}
            <div className="flex flex-row items-center gap-[29px] sm:hidden md:hidden">
              <NavLink to="/" className={`${IsActiveLink("/")}`}>
                Home
              </NavLink>

              <NavLink
                to="/products"
                className={`${IsActiveLink("/products")}`}
              >
                Products
              </NavLink>

              <NavLink to="/about" className={`${IsActiveLink("/about")}`}>
                About Us
              </NavLink>

              <NavLink to="/contact" className={`${IsActiveLink("/contact")}`}>
                Contact Us
              </NavLink>
            </div>

            {/* EXPLORE BUTTON */}
            <Link to="/products">
              <button className="w-[209.26px] h-[52.26px] rounded-[10px] py-[8px] px-[45px] bg-[#28166F] flex flex-row items-center gap-[10px] font-bold text-[20px] text-white font-DM-Sans tracking-widest sm:hidden md:hidden">
                Explore{" "}
                <span>
                  <img src={send} alt="" />
                </span>
              </button>
            </Link>

            {/* HAMBURGER BUTTON */}
            <button className="hidden sm:block md:block" onClick={menuToggle}>
              <img src={hamburger} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
