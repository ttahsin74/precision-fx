import React from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import FormBg from "../assets/contact-bg.svg";

const Contact = () => {
  return (
    <section className="bg-[#b3b0b0] md:py-12 py-7">
      <Container>
        <div className="md:w-[900px] w-full m-auto">
          <Flex className="items-center m-auto gap-[20px] flex-wrap">
            <div className="content-sec md:w-[45%] w-full text-center md:text-left ">
              <Img className={"w-48 m-auto md:m-0"} src={FormBg} />
              <h3 className="my-[15px] font-oxanium text-[24px] font-bold text-[#F95C19]">
                REQUEST A CALLBACK
              </h3>
              <h2 className=" font-extrabold text-[39px] text-[#222132] leading-tight md:leading-snug">
                We will contact in the shortest time.
              </h2>
            </div>
            <div className="md:w-[45%] w-full bg-[#e9e8e8] form-boxs-hadow p-6 rounded-xl md:mt-0 mt-4">
              <form action="">
                <input
                  className="bg-inherit block w-[100%] border-[2px] border-[#4e4c4c] outline-[2px] outline-none py-[8px] pl-[20px] placeholder-black"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-inherit block w-[100%] border-[2px] border-[#4e4c4c] outline-[2px] outline-none py-[8px] pl-[20px] mt-[18px] placeholder-black"
                  type="Email"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  className="w-[100%] outline-none pl-[20px] pt-[13px] pb-[18px] border-[2px] border-[#4e4c4c] bg-inherit  mt-[18px] placeholder-black "
                  rows="4"
                  cols="50"
                  placeholder="Message"
                ></textarea>
                <button className="my-5 py-[5px] rounded-[5px] font-oxanium text-[#fff] text-[20px] font-bold w-[100%] bg-[#F95C19]">
                  Send Message
                </button>
              </form>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
