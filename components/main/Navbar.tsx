"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo-felipee.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Felipe García-Rey
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Sobre mí
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Proyectos
            </a>
            <a href="#footer" className="cursor-pointer">
              Contacto
            </a>
            <Link
            onClick={handleClick}
              href={"https://drive.google.com/file/d/1C7CWYEIur3FyDPgFNqfLk10toyaG4V2Q/view?usp=drive_link"}
              className="cursor-pointer">
               CV
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
