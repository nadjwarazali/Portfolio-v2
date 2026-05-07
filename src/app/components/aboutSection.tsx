import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="col-start-2 py-20 md:px-40 p-10">
      <div className="flex flex-row items-center">
        <Image
          src={"/assets/logo-temp.svg"}
          alt="ALT Logo"
          width={100}
          height={100}
        />
        <p className="text-md md:text-xl md:text-2xl font-sans font-light pl-4 pt-2">
          is an archive of the many projects that were created — from code to
          canvas.
        </p>
      </div>
      <p className="text-md md:text-xl md:text-2xl  font-sans font-light pt-2">
        Built as both a personal portfolio and a creative timeline, this site
        serves as a home for the work done — as a frontend developer, a
        designer, and an independent creator.
      </p>

      <p className="text-md md:text-xl md:text-2xl  font-sans font-light pt-20">
        behind the pursuit, created by
        <span className="font-normal pl-2">Nadjwa Razali</span>
      </p>
    </div>
  );
}
