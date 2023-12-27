"use client";

import React from "react";
import { motion } from "framer-motion";

import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Portafolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Felipe García-Rey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Full Stack Web Developer{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft (0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Ingeniero en Maquinaria Pesada y Vehículos Automotrices de profesión, actualmente estoy ampliando
          mi conjunto de habilidades y conocimientos con el objetivo de convertirme en un Desarrollador Web
          Full Stack. Mi trayectoria profesional en la ingeniería me ha proporcionado una sólida base en la
          resolución de problemas y la gestión de proyectos, habilidades que ahora estoy aplicando en el
          emocionante mundo del desarrollo web. Me comprometo con el aprendizaje continuo y la mejora constante,
          buscando nuevas oportunidades para fusionar mi experiencia en ingeniería con las tecnologías más
          avanzadas en el desarrollo y aplicarlas de manera efectiva.
        </motion.p>
        
      </div>

      <motion.div
        variants={slideInFromRight (0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
