"use client";
import AltCutoutAnimation from "./components/titleCard";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FolderSection } from "./components/folderSection";

export default function Home() {
  const parallaxRef = useRef<any>(null);

  return (
    <>
      <Parallax ref={parallaxRef} pages={1.3}>
        <ParallaxLayer offset={0} speed={1}>
          <section className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen">
            <div className="flex flex-row gap-[32px] row-start-2">
              <AltCutoutAnimation />
              <p className="h-[200px] font-[Crimson_Text] text-8xl flex items-center justify-center">
                ARKIB
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={1.5} style={{ zIndex: 10 }}>
          <section id="projects">
            <FolderSection scrollRef={parallaxRef} />
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
