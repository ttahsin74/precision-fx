import React, { useState } from "react";
import Container from "./layouts/Container";
import Img from "../components/layouts/Img";
import Logo from "../assets/Logo.png";
import Flex from "../components/layouts/Flex";
import { Link } from "react-router-dom";
import { BiCross, BiCrosshair, BiSearch } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { RiFileInfoLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOn, setMenuOn] = useState();
  return (
    <nav className="bg-[white] w-full sticky top-0 z-10">
      <Container className={"py-3 "}>
        <Flex className={"items-center justify-between "}>
          <Img src={Logo} imgClassName={"w-[160px]"} />
          <Flex
            className={`gap-6 lg:gap-2 xl:gap-6 menulist font-[600] text-[#2B3A6A] lg:text-[#da871b] text-[16px] items-center absolute lg:static flex-col lg:flex-row top-0  bg-white lg:bg-transparent w-full md:w-[400px] lg:w-auto px-6 lg:px-0 py-5 lg:py-0 duration-300 ${
              menuOn ? "right-0" : "right-[-120%]"
            }`}
          >
            <div className=" flex w-full justify-between items-center lg:hidden ">
              <div>
                <img className="w-[160px]" src={Logo} alt="" />
              </div>
              <div
                onClick={() => {
                  setMenuOn(false);
                }}
                className="text-3xl p-1 bg-[#1c193836] rounded-full"
              >
                <RxCross2 />
              </div>
            </div>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300 flex items-center gap-2 mr-auto lg:mr-0"
            >
              <FaHome />
              Home
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300 flex items-center gap-2 mr-auto lg:mr-0"
            >
              <RiMoneyDollarCircleLine />
              Markets
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300 flex items-center gap-2 mr-auto lg:mr-0"
            >
              <BsGraphUpArrow />
              Trading
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300 flex items-center gap-2 mr-auto lg:mr-0"
            >
              <PiGraduationCapFill />
              Education
            </a>
            <a
              href=""
              className="hover:text-[#2B3A6A] transition-all before:w-10px before:w-3px before:bg-[#2B3A6A] relative px-2 py-2 before:content-[''] before:w-[90%] before:h-[2px] before:absolute before:bottom-1 before:left-[-100%] overflow-hidden hover:before:left-0 before:duration-300 flex items-center gap-2 mr-auto lg:mr-0"
            >
              <RiFileInfoLine />
              About
            </a>
            <div className="lg:hidden flex items-center gap-2  bg-[#2B3A6A] px-4 py-[11px] rounded-lg text-white text-[14px] hover:bg-[#2b3a6ad5] duration-300 w-full justify-center">
              <button>Contact US</button>
              <IoIosCall className="mb-[2px]" />
            </div>
          </Flex>
          <div className="flex items-center lg:gap-2 gap-5">
            <div className="p-3 bg-[#FE5924] rounded-lg">
              <BiSearch className="text-xl text-white" />
            </div>
            <div className="hidden md:flex items-center gap-2  bg-[#2B3A6A] px-4 py-[11px] rounded-lg text-white text-[14px] hover:bg-[#2b3a6ad5] duration-300 ">
              <button>Contact US</button>
              <IoIosCall className="mb-[2px]" />
            </div>
            <div
              onClick={() => {
                setMenuOn(true);
              }}
              className=" block lg:hidden p-1 rounded-lg text-[35px] bg-[#1c193836]"
            >
              <FiMenu className="p-[3px]" />
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
