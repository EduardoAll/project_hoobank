import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      className={`w-full flex justify-between items-center navbar transition-all duration-500 ease-in-out ${
        isHovered ? 'py-12' : 'py-6'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={logo} 
        alt="hoobank" 
        className={`transition-all duration-500 ease-in-out ${
          isHovered ? 'w-[180px] h-[46px]' : 'w-[124px] h-[32px]'
        }`} 
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer transition-all duration-500 ease-in-out ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${
              isHovered ? 'text-[20px] transform scale-110' : 'text-[16px]'
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`} className="transition-all duration-300 hover:text-white">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`object-contain transition-all duration-500 ease-in-out ${
            isHovered ? 'w-[36px] h-[36px]' : 'w-[28px] h-[28px]'
          }`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute ${isHovered ? 'top-28' : 'top-20'} right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar transition-all duration-500`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer transition-all duration-300 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} ${
                  isHovered ? 'text-[18px]' : 'text-[16px]'
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="hover:text-white transition-colors duration-300">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
