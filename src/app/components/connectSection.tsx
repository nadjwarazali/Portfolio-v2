import React from "react";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <div className="flex flex-col md:flex-row gap-20 justify-center p-10 ">
      <div className="bg-white w-80 rounded-2xl border border-2 border-[#0022FF] shadow-xl p-5">
        <Image
          src="./assets/profile.png"
          className="border border-2 border-[#0022FF] w-full rounded-2xl"
          alt="Profile Image"
        />
        <div className="flex flex-col px-2 pt-6 font-mono ">
          <p className="text-2xl font-semibold ">Nadjwa Razali</p>
          <p className="text-sm text-gray-800 pb-8">@nadjwarazali</p>
          <div className="flex flex-row gap-2">
            <Image
              src={"./assets/icons/TablerBrandLinkedin.svg"}
              className="h-6 w-fit cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nadjwarazali/",
                  "_blank",
                )
              }
              alt="LinkedIn"
            />
            <Image
              src={"./assets/icons/TablerBrandBehance.svg"}
              className="h-6 w-fit cursor-pointer"
              onClick={() =>
                window.open("https://www.behance.net/nadjwarazali", "_blank")
              }
              alt="Behance"
            />
            <Image
              src={"./assets/icons/TablerBrandGithub.svg"}
              className="h-6 w-fit cursor-pointer"
              onClick={() =>
                window.open("https://github.com/nadjwarazali", "_blank")
              }
              alt="Github"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[60%]">
        <p className="font-mono font-bold text-2xl md:text-4xl py-5 md:mt-10">
          Hey! Im Jwa - designer, developer and everything nice
        </p>
        <p className="text-xl md:text-2xl font-sans font-light pt-2 pb-10">
          I work with codes for almost 4 years, mainly in frontend development
          and sometimes as a freelance designer. I love creating things that are
          visually pleasing and intuitive, always aiming to build thoughtful
          solutions for every project Im working on.
        </p>
        <a href="mailto:nadjwarazali@gmail.com">
          <button className="group flex flex-row cursor-pointer md:py-5 items-center">
            <div className="border border-1 w-7 h-0 mr-3 group-hover:border-[#0022FF] transition-colors duration-200"></div>
            <p className="font-mono text-lg md:text-xl font-bold group-hover:text-[#0022FF] transition-colors duration-200">
              Email me
            </p>
          </button>
        </a>
      </div>
    </div>
  );
}
