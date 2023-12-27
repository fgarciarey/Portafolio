import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[2px] pb-[-100px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Puedes agregar contenido adicional aquí si es necesario */}
        </div>

        <div className="mb-10 text-center">
          <p className="text-lg">Felipe García-Rey</p>
          <p className="text-sm">Full Stack Web Developer&copy; - UDD 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;