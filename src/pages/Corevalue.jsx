import React, { useEffect, useRef } from "react";
import Container from "../components/layouts/Container";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAccountBalance, MdOutlineAccountTree } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { TbCommandOff } from "react-icons/tb";
import cardData from "../mockData/extarbalData.json";
import { motion, useAnimation } from "framer-motion";
import Dots from "../components/layouts/Dots";

const iconComponents = {
  RiCustomerService2Fill,
  MdAccountBalance,
  MdOutlineAccountTree,
  PiHandshakeFill,
  TbCommandOff,
};

const Corevalue = () => {
  const controls = useAnimation();
  const cardREf = useRef(null);

  useEffect(() => {
    const content = cardREf.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          } else {
            controls.start({ opacity: 0, y: 200 });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (content) {
      observer.observe(content);
    }
    return () => {
      if (content) {
        observer.unobserve(content);
      }
    };
  }, [controls]);

  return (
    <div ref={cardREf} className="bg-[#1F2336] px-5 md:px-0 md:py-[50px] py-10">
      <Container>
        <Dots />
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center text-[#fff]"
        >
          <h3 className=" lg:text-[45px] text-[33px] md:text-[38px] font-[600]">
            Our Core Values
          </h3>
          <p className="lg:text-[18px] text-sm sm:text-base md:w-[500px] text-center w-full lg:w-[750px] m-auto lg:mt-6 mt-4">
            Our values shape everything we do and show what we believe in and a
            strong commitment we have archiving our vision and serving our
            clients.{" "}
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-7 sm:grid-cols-2 justify-between  text-center m-auto md:text-left md:m-0">
          {cardData &&
            cardData.length > 0 &&
            cardData.map((item, index) => {
              const IconComponent = iconComponents[item.icon];
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={controls}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="overflow-hidden group duration-300 mt-10 "
                  key={index}
                >
                  <div className="bg-[#303449] pt-5 pb-12 rounded-md flex flex-col h-full ">
                    <div className="card-bg flex-1">
                      <div className="bg-[#24283ce8] flex relative  flex-col h-full">
                        <div className="py-4 px-5">
                          <IconComponent className="text-3xl text-white mb-3 m-auto md:m-0" />
                          <h3 className="text-[22px] font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="text-[#A0A1AC] text-sm mt-3 flex-1">
                            {item.description}
                          </p>
                          <div className="">
                            <button className="text-[white] border-2 border-[#A0A1AC] relative font-semibold px-6 py-1 rounded-[27px] flex items-center gap-1 group-hover:before:bg-[#ffff] before:absolute before:w-full before:h-full before:left-[-100%] before:rounded-3xl hover:before:top-0 group-hover:before:left-0 before:duration-[.5s]  overflow-hidden before:-z-10 z-0 group-hover:text-[#FE5924] mt-5 mx-auto md:mx-0 ">
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
                </motion.div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default Corevalue;
