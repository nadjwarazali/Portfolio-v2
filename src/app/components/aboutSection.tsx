import React from "react";
import Image from "next/image";
import { assetPath } from "../lib/assetPath";

export default function AboutSection() {
  return (
    <div className="col-start-2 py-20 md:px-40 p-10">
      <div className="flex flex-row items-center">
        <Image
          src={assetPath("/assets/logo-temp.svg")}
          alt="ALT Logo"
          width={100}
          height={100}
        />
        <p className="text-md md:text-xl md:text-2xl font-sans font-light pl-4 pt-2">
          is a one-person creative studio based in Kuala Lumpur.
        </p>
      </div>
      <p className="text-md md:text-xl md:text-2xl font-sans font-light pt-2">
        We build interactive web experiences — designed with intention and built
        with care. Work that lives at the intersection of design and engineering.
      </p>

      <p className="text-md md:text-xl md:text-2xl font-sans font-light pt-20">
        founded and run by
        <span className="font-normal pl-2">Nadjwa Razali</span>
      </p>
    </div>
  );
}