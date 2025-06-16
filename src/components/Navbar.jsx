import React, { useState } from "react";
import assects from "../assets/assets.js";
function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const HandleToggleButton = () => {
    setisMenuOpen(!isMenuOpen);
    // console.log(isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black md:bg-transparent w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50">
        <a href="#top">
          <h1 className="text-2xl font-bold">Anshul Ojha</h1>
        </a>

        <ul className=" hidden ml-22 md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-black shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className="flex items-center ">
          <div className="flex items-center gap-4">
            <button className="cursor-pointer transition delay-150 duration-200 ease-in-out hover:scale-110">
              <img src={assects.moon_icon} alt="" className="w-6" />
            </button>

            <a
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
              href="#contact"
            >
              Contact <img src={assects.arrow_icon} className="w-3 " />
            </a>
          </div>

          {/* mobile menu */}

          <div className="md:hidden ml-4">
            <img
              onClick={HandleToggleButton}
              className="w-5 cursor-pointer transition ease-in-out hover:scale-110"
              src={assects.menu_white}
              alt=""
            />
          </div>

          <div className="">
            <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute top-16 right-0 bg-black/90 backdrop-blur-md w-full px-8 py-4 flex-col items-center gap-6 md:hidden rounded-lg shadow-lg `}
            >
              <li>
                <a onClick={HandleToggleButton} href="#top">Home</a>
              </li>
              <li>
                <a onClick={HandleToggleButton} href="#about">About me</a>
              </li>
              <li>
                <a onClick={HandleToggleButton} href="#services">Services</a>
              </li>
              <li>
                <a onClick={HandleToggleButton} href="#work">My Work</a>
              </li>
              <li>
                <a onClick={HandleToggleButton} href="#contact">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
