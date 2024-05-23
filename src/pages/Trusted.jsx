import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import secondBannerImg from "../assets/secondBannerImg.jpg";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import Container from "../components/layouts/Container";
import { GiCheckMark } from "react-icons/gi";

const Trusted = () => {
  const controls = useAnimation();
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          } else {
            controls.start({ opacity: 0, y: 150 });
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

  const features = ["Trusted", "Secure", "Reliable", "Expert Support"];

  return (
    <section ref={contentRef} className="trusted-bg ">
      <div className="bg-[#0a0d18dc] lg:py-12 py-6">
        <Container>
          <Flex className="items-center lg:gap-12 gap-7 flex-wrap lg:flex-nowrap  ">
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={controls}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full order-last lg:order-1"
            >
              <Img src={secondBannerImg} imgClassName="w-full " />
            </motion.div>
            <div className="text-[#fff] xl:w-[50%] w-full ">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 1 }}
              >
                <h2 className="font-[600] lg:text-[50px] text-[32px] sm:text-[40px] lg:text-left text-center text-[#da871b] mb-6 lg:leading-[70px]">
                  Your <span className="text-[#fe5924]">Trusted Partner</span>{" "}
                  for Modern Trading.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 110 }}
                animate={controls}
                transition={{ duration: 1.3 }}
              >
                <p className="mb-[40px] lg:text-[18px] text-[14px] sm:text-base text-justify sm:text-center lg:text-left">
                  Welcome to PrecisionFX is Our company provides a range of
                  expert services to help you navigate the. With a team of
                  professional elites who are passionate about modern investing,
                  we have the knowledge and experience to guide you toward
                  success.
                </p>
              </motion.div>
              <motion.div
                className=""
                initial={{ opacity: 0, y: 130 }}
                animate={controls}
                transition={{ duration: 1.7 }}
              >
                <p className="lg:text-[18px] text-[15px] sm:text-base px-3 md:px-5 py-3 bg-[#FE5924] rounded-md border-l-[8px] border-white">
                  Everything you need to trade Forex in one place
                </p>
              </motion.div>
              <motion.div
                className="mt-10 grid md:grid-cols-3 grid-cols-2 gap-5 lg:w-[500px] "
                initial={{ opacity: 0, y: 130 }}
                animate={controls}
                transition={{ duration: 2 }}
              >
                {features.map((feature, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-1 lg:text-[18px] text-[14px] sm:text-base"
                  >
                    <GiCheckMark className="text-lg bg-[#49A94D] p-[3px] rounded-md text-[white]" />
                    <p>{feature}</p>
                  </button>
                ))}
              </motion.div>
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Trusted;

// <motion.
//       ref={sectionRef}
//       initial={{ opacity: 0, y: 100 }}
//       animate={controls}
//       transition={{ duration: 1 }}
//     ></motion.>
