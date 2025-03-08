import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMobx } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-l-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <RiHtml5Line className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <RiCss3Line className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <SiTypescript className="text-7xl flex text-whhite-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <RiTailwindCssLine className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <SiMobx className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl flex items-center flex-col border-4 border-neutral-900 p-4"
        >
          <SiRedux className="text-7xl text-violet-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
