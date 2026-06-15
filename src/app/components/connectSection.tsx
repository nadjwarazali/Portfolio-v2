import React from "react";
import Image from "next/image";
import { assetPath } from "../lib/assetPath";

export default function ConnectSection() {
  return (
    <div className="flex flex-col md:flex-row gap-20 justify-center p-10">
      <div className="bg-white w-52 rounded-2xl border border-2 border-[#0022FF] shadow-xl p-4">
        <Image
          src={assetPath(`/assets/profile.png`)}
          className="border border-2 border-[#0022FF] w-full rounded-2xl"
          width={100}
          height={100}
          alt="Profile Image"
        />
        <div className="flex flex-col px-2 pt-4 font-mono">
          <p className="text-lg font-semibold">Nadjwa Razali</p>
          <p className="text-xs text-gray-800 pb-6">Founder, alt-arkib</p>
          <div className="flex flex-row gap-2">
            <Image
              src={assetPath(`/assets/icons/TablerBrandLinkedin.svg`)}
              className="h-5 w-fit cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nadjwarazali/",
                  "_blank",
                )
              }
              width={100}
              height={100}
              alt="LinkedIn"
            />
            <Image
              src={assetPath(`/assets/icons/TablerBrandBehance.svg`)}
              className="h-5 w-fit cursor-pointer"
              onClick={() =>
                window.open("https://www.behance.net/nadjwarazali", "_blank")
              }
              width={100}
              height={100}
              alt="Behance"
            />
            <Image
              src={assetPath(`/assets/icons/TablerBrandGithub.svg`)}
              className="h-5 w-fit cursor-pointer"
              onClick={() =>
                window.open("https://github.com/nadjwarazali", "_blank")
              }
              width={100}
              height={100}
              alt="Github"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[60%]">
        <p className="font-mono font-bold text-2xl md:text-4xl py-5 md:mt-10">
          Got a project that needs both design and code?
        </p>
        <p className="text-xl md:text-2xl font-sans font-light pt-2 pb-10">
          I'm Jwa — Creative Developer and founder of alt-arkib. I build
          interactive web experiences that sit at the intersection of design
          and engineering. Currently available for freelance projects and
          select collaborations.
        </p>
        <a href="mailto:nadjwarazali@gmail.com">
          <button className="group flex flex-row cursor-pointer md:py-5 items-center">
            <div className="border border-1 w-7 h-0 mr-3 group-hover:border-[#0022FF] transition-colors duration-200"></div>
            <p className="font-mono text-lg md:text-xl font-bold group-hover:text-[#0022FF] transition-colors duration-200">
              Let's talk
            </p>
          </button>
        </a>
      </div>
    </div>
  );
}