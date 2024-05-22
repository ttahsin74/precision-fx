import React from "react";
import secondBannerImg from "../assets/secondBannerImg.jpg";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import Container from "../components/layouts/Container";
import { GiCheckMark } from "react-icons/gi";

const Trusted = () => {
  return (
    <section className=" trasted-bg">
      <div className="bg-[#0a0d18dc] ">
        <Container>
          <Flex className={" items-center gap-12"}>
            <picture>
              <Img src={secondBannerImg} imgClassName={"w-[550px]"} />
            </picture>

            <div className=" text-[#fff] w-[600px]">
              <h2 className="font-[600] text-[50px] text-[#da871b] mb-[50px] leading-[70px]">
                Your <span className="text-[#fe5924]">Trusted Partner</span> for
                Modern Trading.
              </h2>
              <p className="mb-[27px] text-[18px]">
                Welcome to PrecisionFX – Our company provides a range of expert
                services to help you navigate the exciting world of currency
                markets. With a team of professional elites who are passionate
                about modern investing, we have the knowledge and experience to
                guide you toward success.
              </p>
              <p className="text-[18px] px-5 py-3 bg-[#FE5924] rounded-md border-l-[8px] border-white ">
                Everything you need to trade Forex in one place
              </p>
              <div className="mt-10 grid grid-cols-3 gap-5 w-[500px]">
                <button className="flex items-center gap-1"> 
                <GiCheckMark  className="text-lg bg-[#49A94D] p-[3px] rounded-md text-[white]"/>
                <p>Trusted</p>
                </button>
                <button className="flex items-center gap-1"> 
                <GiCheckMark  className="text-lg bg-[#49A94D] p-[3px] rounded-md text-[white]"/>
                <p>Trusted</p>
                </button>
                <button className="flex items-center gap-1"> 
                <GiCheckMark  className="text-lg bg-[#49A94D] p-[3px] rounded-md text-[white]"/>
                <p>Trusted</p>
                </button>
                <button className="flex items-center gap-1"> 
                <GiCheckMark  className="text-lg bg-[#49A94D] p-[3px] rounded-md text-[white]"/>
                <p>Trusted</p>
                </button>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Trusted;
