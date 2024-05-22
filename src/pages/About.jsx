import React from "react";
import Container from "../components//layouts/Container";
import Img from "../components/layouts/Img";
import AboutBannerImg from "../assets/AboutBannerImg.jpg";
import Flex from "../components/layouts/Flex";
import WelcomeBannerImg from "../assets/WelcomeBannerImg.jpg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAccountBalance, MdOutlineAccountTree, MdOutlineArrowRightAlt } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { TbCommandOff } from "react-icons/tb";

const About = () => {
  return (
    <div className="bg-[#000]">
      <div className="bg-[#fff] h-[410px]">
        <Container>
          <h2 className="font-[600] text-[55px] text-[#FE5924] text-center pt-[50px]">
            About PrecisionFX
          </h2>
          <p className="w-[750px] m-auto text-[#55555f] text-center text-[20px]">
            PrecisionFX is Your trusted companion in the dynamic realm of forex
            trading, delivering unparalleled accuracy and seamless functionality
            for traders of all levels.
          </p>
          <div className="m-auto w-[800px] relative top-[80px] border-2 border-[#615a5a] ">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/FdMcPKGtFgA?si=LQU559lAyqpfIwOk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Container>
      </div>

      <div className="pt-[260px]">
        <Container>
          <Flex className={"justify-center gap-24"}>
          </Flex>

          <Flex
            className={
              "justify-center gap-10 border-t border-t-[#da871b] pt-[30px] mt-[100px]"
            }
          >
            <div className="w-[570px]">
              <h4 className="text-[#da871b] font-[600] text-[30px]">Vision</h4>
              <p className="text-[18px] text-[#fff] mt-4">
                Envisioning a World of Financial Empowerment Through Forex
                Trading Excellence
              </p>
            </div>

            <div className="w-[570px]">
              <h4 className="text-[#da871b] font-[600] text-[30px]">Mission</h4>
              <p className="text-[18px] text-[#fff] mt-4">
                To Provide Comprehensive Forex Trading Solutions and Education,
                Empowering Individuals and Institutions to Achieve Financial
                Success with Integrity and Excellence
              </p>
            </div>
          </Flex>
        </Container>

        <div className="bg-[#1F2336] py-[80px] mt-[150px]">
          <Container>
            <div className="text-center text-[#fff]">
              <h3 className="text-[45px] font-[600]">Our Core Values</h3>
              <p className="text-[18px] w-[750px] m-auto mt-6">
                Our values shape everything we do and show what we believe in
                and a strong commitment we have archiving our vision and serving
                our clients.{" "}
              </p>
            </div>
            <div className="flex justify-between gap-7">
              <div className="flex-1 w-[340px] overflow-hidden group hover:scale-y-110 duration-300 mt-10">
                <div className="bg-[#303449] pt-5 pb-12 rounded-md">
                  <div className="bg-[#24283C] flex relative rounded-md">
                    <div className="py-4 px-5">
                      <RiCustomerService2Fill className="text-3xl text-white mb-3" />
                      <h3 className="text-[22px] font-semibold text-white">
                        Customer First
                      </h3>
                      <p className="text-[#A0A1AC] mt-3 ">
                        We believe in serving others fast and first. If you need
                        our assistance, we will be available as immediately as
                        possible.
                      </p>
                      <div className="">
                        <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5">
                          More Info{" "}
                          <span>
                            <MdOutlineArrowRightAlt className="text-3xl" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[340px] overflow-hidden group hover:scale-y-110 duration-300 mt-10">
                <div className="bg-[#303449] pt-5 pb-12 rounded-md">
                  <div className="bg-[#24283C] flex relative rounded-md">
                    <div className="py-4 px-5">
                      <MdAccountBalance  className="text-3xl text-white mb-3" />
                      <h3 className="text-[22px] font-semibold text-white">
                        Accountability & Transparency
                      </h3>
                      <p className="text-[#A0A1AC] mt-3 ">
                        We believe in serving others fast and first. If you need
                        our assistance, we will be available as immediately as
                        possible.
                      </p>
                      <div className="">
                        <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5">
                          More Info{" "}
                          <span>
                            <MdOutlineArrowRightAlt className="text-3xl" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[340px] overflow-hidden group hover:scale-y-110 duration-300 mt-10">
                <div className="bg-[#303449] pt-5 pb-12 rounded-md">
                  <div className="bg-[#24283C] flex relative rounded-md">
                    <div className="py-4 px-5">
                      <MdOutlineAccountTree  className="text-3xl text-white mb-3" />
                      <h3 className="text-[22px] font-semibold text-white">
                        Integrity
                      </h3>
                      <p className="text-[#A0A1AC] mt-3 ">
                        Always doing the right thing in a reliable way. Always
                        upholding moral values, we will always be truthful and
                        honest.
                      </p>
                      <div className="">
                        <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5">
                          More Info{" "}
                          <span>
                            <MdOutlineArrowRightAlt className="text-3xl" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex gap-7 justify-between">

              <div className="flex-1 h-full w-[340px] overflow-hidden group hover:scale-y-110 duration-300 mt-10">
                <div className="bg-[#303449] pt-5 pb-12 rounded-md">
                  <div className="bg-[#24283C] flex relative rounded-md h-[280px]">
                    <div className="py-4 px-5">
                      <RiCustomerService2Fill className="text-3xl text-white mb-3" />
                      <h3 className="text-[22px] font-semibold text-white">
                        Teamwork
                      </h3>
                      <p className="text-[#A0A1AC] mt-3 ">
                        The company is committed to build up a strong
                        synergistic team that stands up for each other at all
                        times.
                      </p>
                      <div className="">
                        <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5">
                          More Info{" "}
                          <span>
                            <MdOutlineArrowRightAlt className="text-3xl" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-full w-[340px] overflow-hidden group hover:scale-y-110 duration-300 mt-10">
                <div className="bg-[#303449] pt-5 pb-12 rounded-md">
                  <div className="bg-[#24283C] flex relative rounded-md h-[280px]">
                    <div className="py-4 px-5">
                      <PiHandshakeFill  className="text-3xl text-white mb-3" />
                      <h3 className="text-[22px] font-semibold text-white">
                        Commitment
                      </h3>
                      <p className="text-[#A0A1AC] mt-3 ">
                        As traders, we decided to commit to being the best, took
                        our time to learn to become good traders and mentors,
                        and we are committed to that.
                      </p>
                      <div className="">
                        <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5">
                          More Info{" "}
                          <span>
                            <MdOutlineArrowRightAlt className="text-3xl" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h- w-[340px] overflow-hidden group hover:scale-y-110 duration-300 mt-10">
                <div className="bg-[#303449] pt-5 pb-12 rounded-md">
                  <div className="bg-[#24283C] flex relative rounded-md h-[280px]">
                    <div className="py-4 px-5">
                      <TbCommandOff  className="text-3xl text-white mb-3" />
                      <h3 className="text-[22px] font-semibold text-white">
                        Communication & Cost Consciousness
                      </h3>
                      <p className="text-[#A0A1AC] mt-3 ">
                        Effective communication is important to us. Our team
                        members at all times bear in mind that any form of
                        wastage is strongly detested.
                      </p>
                      <div className="">
                        <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5">
                          More Info{" "}
                          <span>
                            <MdOutlineArrowRightAlt className="text-3xl" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
