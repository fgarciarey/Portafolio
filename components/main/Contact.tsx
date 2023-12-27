"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { RxDiscordLogo, RxFile, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col relative items-center justify-center min-h-screen w-full h-full"
      id="contact"
    >
      <div className="relative w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Contacto
        </motion.div>
        <div className="Welcome-box mx-auto px-[20px] py-[5px] z-[50] border my-[100px] border-[#7042f88b] opacity-[0.9] text-center">
          <h1 className="Welcome-text-center text-[15px] text-gray-200">
            Visita mis redes
          </h1>
        </div>

        <div className="min-w-[300px] h-auto flex flex-row items-center justify-start">
          {/* Sección superior */}
          <div className="flex items-center mx-[40px] text-[18px] text-gray-200">
            <a
              href="https://github.com/fgarciarey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RxGithubLogo size={30} />
              <span className="ml-[20px]">GitHub</span>
            </a>
          </div>

          <div className="flex items-center mx-[40px] text-[18px] text-gray-200">
            <a
              href="https://www.linkedin.com/in/felipegarciareyyanez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RxLinkedinLogo size={30} />
              <span className="ml-[20px]">LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center mx-[40px] text-[18px] text-gray-200">
            <a
              href="mailto:felipe.agry@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaEnvelope size={30} />
              <span className="ml-[20px]">Email</span>
            </a>
          </div>
        </div>

        <div className="min-w-[300px] h-auto flex flex-row items-center justify-center mt-10">
          {/* Sección inferior centrada y separada */}
          <div className="flex items-center mx-[40px] text-[18px] text-gray-200">
            <a
              href="https://discord.gg/FSbWaQZK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RxDiscordLogo size={30} />
              <span className="ml-[20px]">Discord</span>
            </a>
          </div>

          <div className="flex items-center mx-[40px] text-[18px] text-gray-200">
            <a
              href="https://drive.google.com/file/d/1C7CWYEIur3FyDPgFNqfLk10toyaG4V2Q/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <RxFile size={30} />
              <span className="ml-[20px]">Curriculum</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;