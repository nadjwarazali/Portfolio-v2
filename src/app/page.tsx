"use client";
import AltCutoutAnimation from "./components/titleCard";
import Navbar from "./components/navbar";
import { useRef } from "react";
import { AboutSection } from "./components/aboutSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FolderSection } from "./components/folderSection";
import { start } from "repl";
import { ContactSection } from "./components/contactSection";

export default function Home() {
  const parallaxRef = useRef<any>(null);

  return (
    <>
      <Navbar scrollRef={parallaxRef} />

      <Parallax ref={parallaxRef} pages={3}>
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
            <FolderSection />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={2}>
          <section id="about" className="grid grid-cols-[10%_1fr_10%]">
            <AboutSection />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <section
            id="contact"
            className="grid grid-cols-[10%_1fr_10%] h-screen p-10"
          >
            <ContactSection />
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
