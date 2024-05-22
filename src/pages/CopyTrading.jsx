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
      <div className="bg-[#131218e7] py-[50px]">
        <Container>
          <div className="text-center m-auto w-[700px]">
            <h2 className="font-[700] text-[55px] text-[#F95723]">
              Copy Trading
            </h2>
            <p className="mb-[27px] text-[16px] mt-8  text-[#9B9CA6]">
              Automated Trade Execution & Risk Management to Replicate Success,
              Maximize Profit, its our maain aim for receve interset .
            </p>
          </div>
          <Flex className=" gap-5">
            <div className=" text-[#fff] w-[50%] overflow-hidden">
              <div className="bg-[#3436478a] w-[600px] p-10">
                <h4 className="text-[#ffffff] font-[600] text-[30px] w-[400px]">
                  Making a well decision is important!
                </h4>
                <p className="text-[18px] text-[#9B9CA6] tracking-[1px] mt-7">
                  Take your time to read and understand the terms and conditions
                  before making a well-informed decision. If you have any
                  specific concerns or questions about the terms, don’t hesitate
                  to seek clarification from Forex SPV Support Team.
                </p>
                <button className=" flex items-center gap-3 mt-5 px-5 py-3  border-2 border-[#F95723] font-semibold">
                  Go For Copy{" "}
                  <span>
                    <ImArrowDownRight2 />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[50%] overflow-hidden">
              <Slider {...settings}>
                <div>
                  <img className="w-full h-[400px]"
                    src={
                      "https://as2.ftcdn.net/v2/jpg/02/98/84/69/1000_F_298846909_mssb9MpliUGU22kW0r0i7dMjPwdGMkZy.jpg"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img className="w-full h-[400px]"
                    src={
                      "https://previews.123rf.com/images/techdesign07/techdesign072005/techdesign07200500028/147271779-stock-market-background-or-forex-trading-business-graph-chart-for-financial-investment-concept.jpg"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img className="w-full h-[400px]"
                    src={
                      "https://img.freepik.com/premium-vector/stock-market-forex-trading-business-graph-chart_230610-569.jpg?w=740"
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
