import React from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import FotterIcon from "../assets/Logo.png";
import { SiMessenger } from "react-icons/si";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#d8d8d8] py-[50px]">
        <Container>
          <Flex className={"items-center gap-16 md:flex-nowrap flex-wrap"}>
            <div className="md:w-[33%] w-full">
              <div className="w-[200px] m-auto md:m-0 ">
                <img src={FotterIcon} alt="" />
              </div>
              <p className="mt-7 text-[#777885] text-center">
                Experience the power of PrecisionFXgjg your gateway to the fast
                paced world foreign exchange trading. With cutting-edge,
                navigate the markets with confidence and precision. Join us
                today and take your trading to new heights.
              </p>
              <div className="mt-5 md-block hidden">
                <h3 className="text-[25px] text-[#2C3B6B] font-bold">
                  Social Links
                </h3>
                <div className="flex gap-3 mt-3">
                  <div className="p-2 bg-[#ffffff] rounded-full">
                    <FaFacebookF className="text-2xl text-[#0866FF] " />
                  </div>
                  <div className="p-2 bg-[#ffffff] rounded-full">
                    <FaInstagramSquare className="text-2xl text-[#F7327C] " />
                  </div>
                  <div className="p-2 bg-[#ffffff] rounded-full">
                    <FaTwitter className="text-2xl text-[#0866FF] " />
                  </div>
                  <div className="p-2 bg-[#ffffff] rounded-full">
                    <FaYoutube className="text-2xl text-[#FF0000] " />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] w-full ">
              <div className="flex gap-12 flex-wrap md:flex-nowrap justify-center md:justify-start ">
                <div className="flex flex-col">
                  <h6 className="ml-[-16px] text-[#2B3A6A] font-bold text-[18px]">
                    Trading
                  </h6>
                  <ul className="list-disc text-[#44444b]">
                    <li className="whitespace-nowrap">Daily Watchlist</li>
                    <li>Swing </li>
                    <li>Details</li>
                    <li>some</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h6 className="ml-[-16px] text-[#2B3A6A] font-bold text-[18px]">
                    About us
                  </h6>
                  <ul className="list-disc text-[#44444b]">
                    <li className="whitespace-nowrap">Who we are</li>
                    <li>Works</li>
                    <li>Details</li>
                    <li>some</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h6 className="ml-[-16px] text-[#2B3A6A] font-bold text-[18px]">
                    Contact us
                  </h6>
                  <ul className="list-disc text-[#44444b]">
                    <li>24/7 support</li>
                    <li>+12546545643</li>
                    <li>Email</li>
                  </ul>
                </div>
                <div className="p-5 bg-[#cfc8c856] form-boxs-hadow rounded-lg">
                  <h3 className="text-2xl font-bold">Need assistance?</h3>
                  <p>Live chat with our team for assistance.</p>
                  <div className="flex items-center gap-4 bg-[#88888869] rounded-lg px-3 py-1 mt-4 ">
                    <div>
                      <SiMessenger className="text-3xl text-[#3375F7]" />
                    </div>
                    <div>
                      <h6 className="font-bold  text-[#2b334d]">
                        Live Chat With
                      </h6>
                      <span className="text-[14px]">Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
