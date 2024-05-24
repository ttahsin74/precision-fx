import React from "react";

import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import BannerImg from "../assets/BannerImg.jpeg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div className="xl:bg-transparent hero-bg ">
      <div className="xl:bg-[#090d16] bg-[#090d16ec]">
        <Container>
          <Flex className="justify-between w-full items-center gap-5 xl:pt-[60px] pt-7 sm:pt-9 lg:pt-8 pb-12 lg:pb-[70px]">
            <div className=" xl:w-1/2 text-[#fff] lg:m-auto xl:m-0">
              <h1 className="font-[700] lg:text-[55px] text-[32px] sm:text-[40px]  text-center xl:text-left text-[#da871b] leading-snug lg:w-[700px] xl:w-auto m-auto ">
                A Map To Navigating The Market.
              </h1>
              <p className="lg:mb-[50px] mb-7 lg:text-[18px] text-[14px] sm:text-base text-center xl:text-left tracking-[.10em] mt-5 lg:w-[700px] xl:w-auto m-auto">
                As a Forex trader, having a good working knowledge of how the
                market truly works is essential to achieving success in trading
                the currency market.
              </p>
              <div className="">
                <button className="text-[white] m-auto xl:m-0 bg-[#FE5924] relative font-semibold px-6 py-2 rounded-[27px] flex items-center gap-1 before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 hover:text-[#FE5924]">
                  More Info{" "}
                  <span>
                    <MdOutlineArrowRightAlt className="text-3xl" />
                  </span>
                </button>
              </div>
            </div>
            <div className={"w-0 xl:w-1/2 hidden lg:block"}>
              <img className="w-full rounded-xl" src={BannerImg} alt="" />
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Home;
