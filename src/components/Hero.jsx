import React from "react";
import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/Hari.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-5 text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl"
            >
              <h6 className="pl-1 text-3xl bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                I am
              </h6>
              <span className="bg-gradient-to-r from-yellow-300 via-slate-500 to-yellow-500 bg-clip-text tracking-tight text-transparent pr-3 pb-16 text-5xl font-bold md:mt-16 lg:text-7xl">
                Harikrishnan
              </span>
              <span className="animate-wave text-5xl lg:text-7xl absolute">
                {" "}
                👋
              </span>
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent animate-typing"
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Software Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "App Developer",
                  2000,
                ]}
                cursor={true}
                wrapper="span"
                speed={5}
                style={{caretColor: "red"}}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profileImage}
              alt="Harikrishnan Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
