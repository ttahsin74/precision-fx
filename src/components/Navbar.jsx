import React from "react";
import Container from "./layouts/Container";
import Img from "../components/layouts/Img";
import Logo from "../assets/Logo.png";
import Flex from "../components/layouts/Flex";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-[white] w-full sticky top-0 z-10">
      <Container className={"py-3"}>
        <Flex className={"items-center justify-between"}>
          <Img src={Logo} imgClassName={"w-[160px]"} />
          <Flex
            className={
              "gap-6 menulist font-[600] text-[#da871b] text-[16px] items-center"
            }
          >
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300"
            >
              Home
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300"
            >
              Markets
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300"
            >
              Trading
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300"
            >
              Education
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300"
            >
              About
            </a>
          </Flex>
          <div className="flex items-center gap-2">
            <div className="p-3 bg-[#FE5924] rounded-lg">
              <BiSearch className="text-xl text-white" />
            </div>
            <div className="flex items-center gap-2 bg-[#2B3A6A] px-4 py-[11px] rounded-lg text-white text-[14px] hover:bg-[#2b3a6ad5] duration-300 ">
              <button>Contact US</button>
              <IoIosCall className="mb-[2px]" />
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
