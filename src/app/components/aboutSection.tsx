import React from "react";

export const AboutSection = () => {
  return (
    <div className="col-start-2 py-10">
      <div className="flex flex-row items-center">
        <img src={"/assets/logo-temp.svg"} />
        <p className="text-2xl font-sans font-light pl-4 pt-2">
          is an archive of the many projects that were shaped — from code to
          canvas.
        </p>
      </div>
      <p className="text-2xl font-sans font-light pt-2">
        Built as both a personal portfolio and a creative timeline, this site
        serves as a home for the work done — as a frontend developer, a
        designer, and an independent creator.
      </p>

      <p className="text-2xl font-sans font-light pt-20">
        behind the pursuit, created by
        <span className="font-normal pl-2">Nadjwa Razali</span>
      </p>
    </div>
  );
};
