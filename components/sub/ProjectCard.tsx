"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  url: string;
}

function ProjectCard({ src, title, description, url }: ProjectCardProps) {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full">
      {/* Ajusta el componente Image según tus necesidades */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        {/* Utilizando el componente Link de Next.js con flex y mt-auto */}
        <div className="mt-10 flex items-center justify-center">
  <Link
    onClick={handleClick}
    href={url}
    className="bg-opacity-20 hover:bg-opacity-10 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent bg-purple-500 hover:bg-purple-400 text-white font-semibold py-2 px-4 border rounded"
  >
    Repositorio
  </Link>
</div>
      </div>
    </div>
  );
}

export default ProjectCard;