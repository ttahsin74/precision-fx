import React from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import { GiProfit } from "react-icons/gi";
import { BsBagX } from "react-icons/bs";

const ProfotLose = () => {
  return (
    <section className=" profit-bg">
      <div className="bg-[#0000007c] py-[70px]">
        <Container>
          <div className="text-center w-[700px] m-auto">
            <h5 className="text-[25px] text-[#A8A9B3]">Precision-fx Trading</h5>
            <h2 className="text-[55px] font-bold tracking-wide text-white">
              The Ultimate Gateway to{" "}
              <span className="text-[#FE5924]">Trading</span> Success
            </h2>
          </div>
          <Flex className={"justify-center gap-10 items-center mt-12"}>
            <div className="w-[570px]">
              <div className=" text-white flex items-center gap-5">
                <GiProfit className="text-2xl" />
                <h4 className="text-[#ffffff] font-[600] text-[30px]">
                  Profit
                </h4>
              </div>

              <p className="text-[18px] text-[#A8A9B3] mt-4 text-justify">
                The level of potential profit is intrinsically linked to the
                risk tolerance of the investor, as well as the strategy employed
                when utilizing leverage. It is essential to carefully evaluate
                these factors when making investment decisions.
              </p>
            </div>

            <div className="w-[570px]">
              <div className="text-white flex items-center gap-5">
                <BsBagX className="text-2xl " />
                <h4 className="text-[#ffffff] font-[600] text-[30px]">
                  Loss Case
                </h4>
              </div>
              <p className="text-[18px] text-[#A8A9B3] mt-4 text-justify">
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
