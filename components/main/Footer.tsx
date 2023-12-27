import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[100px] pb-[40px]" id="footer">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          <div className="min-w-[300px] h-auto flex flex-col items-center justify-center">
            <div className="font-bold text-[26px] mb-[20px]">Contacto</div>
            <div className="flex flex-row items-center justify-start">
              <p className="flex items-center my-[20px] mr-[10px] cursor-pointer">
                <FaEnvelope size={30} />
                <Link href="mailto:felipe.garcia-rey@hotmail.com" className="text-[18px] ml-[10px]">Email</Link>
              </p>
              <p className="flex items-center my-[20px] mr-[10px] cursor-pointer">
                <a href="https://github.com/fgarciarey" target="_blank" rel="noopener noreferrer">
                  <RxGithubLogo size={30} />
                  <span className="text-[18px] ml-[10px]">GitHub</span>
                </a>
              </p>
              <p className="flex items-center my-[20px] cursor-pointer">
                <a href="https://www.linkedin.com/in/felipegarciareyyanez/" target="_blank" rel="noopener noreferrer">
                  <RxLinkedinLogo size={30} />
                  <span className="text-[18px] ml-[10px]">LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          
        </div>

        <div className="mb-15 text-2xl text-center">
          Felipe García-Rey
          <br />
          Full Stack Web Developer&copy; - UDD 2023.
        </div>
      </div>
    </div>
  );
}

export default Footer;