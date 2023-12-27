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

        <div className="min-w-[300px] h-auto flex flex-col md:flex-row items-center justify-around mb-5">
          {/* Sección superior */}
          <div className="contact-item flex flex-col items-center ml-[20px]">
            <a
              href="https://github.com/fgarciarey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] text-gray-200 mt-[8px] flex flex-col items-center"
            >
              <RxGithubLogo size={30} />
              <span className="mt-[10px]">GitHub</span>
            </a>
          </div>

          <div className="contact-item flex flex-col items-center ml-[20px]">
            <a
              href="https://www.linkedin.com/in/felipegarciareyyanez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] text-gray-200 mt-[8px] flex flex-col items-center"
            >
              <RxLinkedinLogo size={30} />
              <span className="mt-[10px]">LinkedIn</span>
            </a>
          </div>

          <div className="contact-item flex flex-col items-center ml-[20px]">
            <a
              href="mailto:felipe.agry@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] text-gray-200 mt-[8px] flex flex-col items-center"
            >
              <FaEnvelope size={30} />
              <span className="mt-[10px]">Email</span>
            </a>
          </div>
        </div>

        <div className="min-w-[300px] h-auto flex flex-row items-center justify-around mt-5">
          {/* Sección inferior centrada y separada */}
          <div className="ontact-item flex flex-col items-center ml-[20px]">
            <a
              href="https://discord.gg/FSbWaQZK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] text-gray-200 mt-[8px] flex flex-col items-center"
            >
              <RxDiscordLogo size={30} />
              <span className="mt-[10px]">Discord</span>
            </a>
          </div>

          <div className="contact-item flex flex-col items-center ml-[20px]">
            <a
              href="https://drive.google.com/file/d/1C7CWYEIur3FyDPgFNqfLk10toyaG4V2Q/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] text-gray-200 mt-[8px] flex flex-col items-center"
            >
              <RxFile size={30} />
              <span className="mt-[10px]">Curriculum</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;