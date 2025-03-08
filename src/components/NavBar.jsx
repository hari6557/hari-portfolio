import React from "react";
import logo from "../assets/Hk-new.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="text-3xl font-bold text-sky-700 px-2"> {`<`} </span>
        <span className="text-4xl font-semibold">HK</span>
        <span className="text-3xl font-bold text-sky-700 px-2"> {`/>`} </span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/harikrishnan6557/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/hari6557">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/i_am_harri/profilecard/?igsh=d2pubzlkZWpmMjk=">
          <FaInstagram />
        </a>
        <a href="https://x.com/hari6557?s=21">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
