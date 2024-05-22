import React from "react";

import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import BannerImg from "../assets/BannerImg.jpeg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-[#090d16] ">
      <Container>
        <Flex className="justify-between w-full items-center gap-5 pt-[60px] pb-[100px]" >
          <div className="w-1/2 text-[#fff] ">
            <h1 className="font-[600] text-[55px] text-[#da871b]">
              A Map To Navigating The Market.
            </h1>
            <p className="mb-[50px] text-[18px] tracking-[.10em] ">
              As a Forex trader, having a good working knowledge of how the
              market truly works is essential to achieving success in trading
              the currency market.
            </p>
            <div className="">
              <button className="text-[white] bg-[#FE5924] relative font-semibold px-6 py-2 rounded-[27px] flex items-center gap-1 before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 hover:text-[#FE5924]">
                More Info{" "}
                <span>
                  <MdOutlineArrowRightAlt className="text-3xl" />
                </span>
              </button>
            </div>
          </div>
          <Img
            src={BannerImg}
            imgClassName={"w-full rounded-xl"}
            className={"w-1/2 "}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default Home;
