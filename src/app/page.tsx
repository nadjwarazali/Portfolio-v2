"use client";
import AltCutoutAnimation from "./components/titleCard";
import GradientBackground from "./components/gradientBg";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FolderSection } from "./components/folderSection";

export default function Home() {
  const parallaxRef = useRef(null);

  return (
    <>
      <GradientBackground />
      <Parallax ref={parallaxRef} pages={1.5}>
        <ParallaxLayer offset={0} speed={0.5}>
          <section className="grid md:grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen pb-10">
            <div className="flex flex-col md:flex-row md:gap-[32px] md:row-start-2">
              <AltCutoutAnimation />
              <p className="md:h-[200px] font-crimson text-6xl md:text-8xl flex items-center justify-center">
                ARKIB
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={0.65} speed={0.3} style={{ zIndex: 10 }}>
          <section id="projects">
            <FolderSection scrollRef={parallaxRef} />
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
