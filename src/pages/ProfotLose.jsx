import React from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import { GiProfit } from "react-icons/gi";
import { BsBagX } from "react-icons/bs";

const ProfotLose = () => {
  return (
    <section className=" profit-bg">
      <div className="bg-[#0000007c] xl:py-[50px] lg:py-10 sm:py-8 py-6">
        <Container>
          <div className="text-center md:w-[700px] w-full m-auto">
            <h5 className="lg:text-[25px] text-[19px] text-[#A8A9B3]">
              Precision-fx Trading
            </h5>
            <h2 className="lg:text-[53px] text-[32px] sm:text-[40px] font-bold tracking-wide text-white leading-snug lg:leading-tight">
              The Ultimate Gateway to{" "}
              <span className="text-[#FE5924]">Trading</span> Success
            </h2>
          </div>
          <Flex
            className={
              "justify-center gap-10 items-center lg:mt-8 mt-5 flex-wrap "
            }
          >
            <div className="md:w-[45%] w-full">
              <div className="md:text-left text-center text-white flex items-center gap-5 md:justify-start justify-center ">
                <GiProfit className="text-2xl" />
                <h4 className="text-[#ffffff] font-[600] text-[30px] ">
                  Profit
                </h4>
              </div>

              <p className="text-[18px] text-[#A8A9B3] mt-4 md:text-justify  text-center">
                The level of potential profit is intrinsically linked to the
                risk tolerance of the investor, as well as the strategy employed
                when utilizing leverage. It is essential to carefully evaluate
                these factors when making investment decisions.
              </p>
            </div>

            <div className="md:w-[45%] w-full">
              <div className="text-white flex items-center gap-5 md:justify-start justify-center ">
                <BsBagX className="text-2xl " />
                <h4 className="text-[#ffffff] font-[600] text-[30px]">
                  Loss Case
                </h4>
              </div>
              <p className="text-[18px] text-[#A8A9B3] mt-4 md:text-justify text-center"  >
                We value our clients’ trust and have strict protocols. If an
                account experiences a 30% drawdown, our traders will halt
                trading the account and we advise our clients to withdraw their
                funds immediately.
              </p>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default ProfotLose;
