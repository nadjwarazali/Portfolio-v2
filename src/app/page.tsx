"use client";
import GradientBackground from "./components/gradientBg";
import AboutSection from "./components/aboutSection";
import ProjectSection from "./components/projectSection";
import { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FolderSection } from "./components/folderSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const parallaxRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <>
      <GradientBackground />

      {/* Expanded panels — outside Parallax so they're never clipped */}
      <AnimatePresence>
        {isAboutExpanded && (
          <motion.div
            key="about-expanded"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: "#f3ecdc",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setIsAboutExpanded(false)}
              style={{ position: "fixed", top: 24, right: 24, zIndex: 10000 }}
              className="font-mono text-sm border border-[#1A1A1A] text-[#1A1A1A] px-4 py-2 rounded-full bg-[#f3ecdc]"
            >
              ✕ Close
            </button>
            <AboutSection onExpand={() => {}} isExpanded={true} />
          </motion.div>
        )}

        {isExpanded && (
          <motion.div
            key="project-expanded"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: "#f3ecdc",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setIsExpanded(false)}
              style={{ position: "fixed", top: 24, right: 24, zIndex: 10000 }}
              className="font-mono text-sm border border-[#1A1A1A] text-[#8B0000] px-4 py-2 rounded-full bg-[#f3ecdc]"
            >
              ✕ Close
            </button>
            <ProjectSection onExpand={() => {}} isExpanded={true} />
          </motion.div>
        )}
      </AnimatePresence>

      <Parallax ref={parallaxRef} pages={2} style={{ background: "transparent" }}>

        {/* Hero */}
        <ParallaxLayer offset={0} speed={0.3}>
          <section
            style={{ height: "100vh" }}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-crimson text-5xl md:text-8xl text-[#1A1A1A] text-center">
              Nadjwa Razali
            </p>
            <p className="font-mono text-sm md:text-base text-[#6B6560] mt-3 text-center">
              Creative Developer, KL
            </p>
          </section>
        </ParallaxLayer>

        {/* Folder tabs — peek at bottom of viewport on load */}
        <ParallaxLayer offset={0.72} speed={0} style={{ zIndex: 10 }}>
          <section id="projects">
            <FolderSection
              scrollRef={parallaxRef}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              isAboutExpanded={isAboutExpanded}
              setIsAboutExpanded={setIsAboutExpanded}
            />
          </section>
        </ParallaxLayer>

      </Parallax>
    </>
  );
}
