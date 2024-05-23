import React from "react";
import Container from "../components//layouts/Container";
import Flex from "../components/layouts/Flex";
import { ImArrowDownRight2 } from "react-icons/im";
import Slider from "react-slick";

const CopyTrading = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="copy-trading ">
      <div className="bg-[#131218e7] py-6 lg:py-[50px]">
        <Container>
          <div className="text-center m-auto w-full lg:w-[700px]">
            <h2 className="font-[700] lg:text-[55px] text-[32px] sm:text-[40px] text-[#F95723] ">
              Copy Trading
            </h2>
            <p className=" xl:text-lg sm:text-base text-sm  lg:my-8 my-5  text-[#9B9CA6]">
              Automated Trade Execution & Risk Management to Replicate Success,
              Maximize Profit, its our maain aim for receve interset .
            </p>
          </div>
          <Flex className="gap-5 lg:flex-nowrap flex-wrap m-auto lg:m-0">
            <div className=" text-[#fff] lg:w-[50%] w-full overflow-hidden">
              <div className="bg-[#3436478a] w-full xl:p-10 lg:p-6 p-4">
                <h4 className="text-[#ffffff] font-[600] lg:text-[30px] text-[22px] lg:w-[400px] w-full leading-snug lg:text-left text-center ">
                  Making a well decision is important!
                </h4>
                <p className="xl:text-lg sm:text-base text-sm text-[#9B9CA6] tracking-[1px] my-7 text-justify sm:text-center lg:text-left">
                  Take your time to read and uerstand the terms and conditions
                  before making a well-informed decision. If you have any
                  specific concerns or questions about the terms, don’t hesitate
                  to seek clarification from Forex SPV Support Team.
                </p>
                <button className="relative flex items-center gap-3 mt-5 px-5 py-3  border-2 border-[#F95723] font-semibold before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%]  hover:before:top-0 hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 hover:text-[#FE5924] m-auto lg:m-0">
                  Go For Copy{" "}
                  <span>
                    <ImArrowDownRight2 />
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-[50%] w-full overflow-hidden">
              <Slider {...settings}>
                <div>
                  <img
                    className="w-full lg:h-[408px] h-[300px]"
                    src={
                      "https://classplusapp.com/growth/wp-content/uploads/2022/06/How-to-teach-stock-trading-online-1024x571.jpg"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full lg:h-[408px] h-[300px]"
                    src={
                      "https://www.shareindia.com/wp-content/uploads/2022/10/Trading-Psychology-%E2%80%93-Mastering-Emotions-Biases-and-Common-Traps.webp"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full lg:h-[408px] h-[300px]"
                    src={
                      "https://s31898.pcdn.co/wp-content/uploads/2022/10/AdobeStock_416057612-e1665052015417.jpg"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full lg:h-[408px] h-[300px]"
                    src={
                      "https://www.shareindia.com/wp-content/uploads/2022/10/Trading-Psychology-%E2%80%93-Mastering-Emotions-Biases-and-Common-Traps.webp"
                    }
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default CopyTrading;
