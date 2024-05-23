import React, { useEffect, useRef } from "react";
import Container from "../components//layouts/Container";
import Img from "../components/layouts/Img";
import AboutBannerImg from "../assets/AboutBannerImg.jpg";
import Flex from "../components/layouts/Flex";
import WelcomeBannerImg from "../assets/WelcomeBannerImg.jpg";
import { RiCustomerService2Fill } from "react-icons/ri";
import {
  MdAccountBalance,
  MdOutlineAccountTree,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { TbCommandOff } from "react-icons/tb";
import Dots from "../components/layouts/Dots";
import { ImArrowDownRight2 } from "react-icons/im";

const About = () => {
  return (
    <div className="md:bg-[#000] bg-white ">
      <div className="bg-[#fff] lg:h-[450px] h-[150px]">
        <Container>
          <div className="lg:pt-[50px] pt-8">
            <div>
              <Dots />
            </div>
            <h2 className="font-[700] lg:text-[55px] text-[33px] sm:text-[40px] text-center text-[#FE5924]  mb-3">
              About PrecisionFX
            </h2>
            <p className="w-full xl:text-lg text-base  xl:w-[750px] m-auto text-[#55555f] text-center ">
              PrecisionFX is Your trusted companion in the dynamic forex
              trading, delivering unparalleled accuracy and seamless
              functionality for traders of all levels.
            </p>
            <div className="m-auto lg:w-[800px] w-full relative lg:top-[60px] top-12 border-2 border-[#615a5a] ">
              <iframe
                className="lg:h-[412px] h-[200px]"
                width="100%"
                // height="415"
                src="https://www.youtube.com/embed/y1YveJkdFCs?si=tji-y-bD2TUAZbVS"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Container>
      </div>

      <div className="lg:pt-[260px] pt-[240px] mb-[50px]">
        <Container>
          <Flex
            className={
              "relative justify-center gap-10 border-t border-t-[#F95723] lg:pt-[70px] pt-[50px] mt-[100px] lg:flex-nowrap flex-wrap"
            }
          >
            <span className="p-2 rounded-full bg-[#F95723] absolute top-[-9px] left-0"></span>
            <span className="p-2 rounded-full bg-[#F95723] absolute top-[-9px] right-0"></span>
            <div className="w-[570px] bg-[#abb7b82a] p-4">
              <h4 className="text-[#F95723] font-[600] text-[30px] text-center md:text-left">
                Vision
              </h4>
              <p className="text-[18px] md:text-[#cfcece] text-[#444141] mt-4 text-center md:text-left">
                Envisioning a World of Financial Empowerment Through Forex
                Trading Excellence, and Institutions to Achieve Financial
                Success with Integrity
              </p>
              <div className=" my-5 ">
                <button className="m-auto md:m-0 relative flex items-center gap-3 mt-5 px-5 py-3  border-2 border-[#F95723] font-semibold before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%]  hover:before:top-0 hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 hover:text-[#FE5924] text-[#cfcece] bg-[#0000007a]">
                  Learn More{" "}
                  <span>
                    <ImArrowDownRight2 />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[570px] bg-[#abb7b82a] p-4">
              <h4 className=" text-center md:text-left text-[#F95723] font-[600] text-[30px]">
                Mission{" "}
              </h4>
              <p className="text-center md:text-left text-[18px] md:text-[#cfcece] text-[#444141] mt-4">
                To Provide Comprehensive Forex Trading Solutions and Education,
                Empowering Individuals and Institutions to Achieve Financial
                Success with Integrity and Excellence
              </p>
              <div className=" my-5 ">
                <button className="m-auto md:m-0 relative flex items-center gap-3  px-5 py-3  border-2 border-[#F95723] font-semibold before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%]  hover:before:top-0 hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 hover:text-[#FE5924] text-[#cfcece] bg-[#0000007a]">
                  Learn More{" "}
                  <span>
                    <ImArrowDownRight2 />
                  </span>
                </button>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default About;
