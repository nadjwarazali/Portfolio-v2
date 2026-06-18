"use client";
import GradientBackground from "./components/gradientBg";
import ProjectSection from "./components/projectSection";
import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FolderSection } from "./components/folderSection";
import { motion, AnimatePresence } from "framer-motion";

const SunIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 9 9"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    style={{ display: "block" }}
  >
    <rect x="4" y="0" width="1" height="2" fill="currentColor" />
    <rect x="4" y="7" width="1" height="2" fill="currentColor" />
    <rect x="0" y="4" width="2" height="1" fill="currentColor" />
    <rect x="7" y="4" width="2" height="1" fill="currentColor" />
    <rect x="1" y="1" width="1" height="1" fill="currentColor" />
    <rect x="7" y="1" width="1" height="1" fill="currentColor" />
    <rect x="1" y="7" width="1" height="1" fill="currentColor" />
    <rect x="7" y="7" width="1" height="1" fill="currentColor" />
    <rect x="3" y="3" width="3" height="3" fill="currentColor" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 9 9"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    style={{ display: "block" }}
  >
    <rect x="2" y="0" width="3" height="1" fill="currentColor" />
    <rect x="1" y="1" width="3" height="1" fill="currentColor" />
    <rect x="0" y="2" width="3" height="1" fill="currentColor" />
    <rect x="0" y="3" width="3" height="1" fill="currentColor" />
    <rect x="0" y="4" width="3" height="1" fill="currentColor" />
    <rect x="0" y="5" width="3" height="1" fill="currentColor" />
    <rect x="1" y="6" width="3" height="1" fill="currentColor" />
    <rect x="2" y="7" width="3" height="1" fill="currentColor" />
  </svg>
);

export default function Home() {
  const parallaxRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, [isDark]);

  return (
    <>
      <GradientBackground isDark={isDark} />

      {/* Dark mode toggle — top right, hidden when a folder panel is open */}
      {!isFolderOpen && (
        <button
          onClick={() => setIsDark((v) => !v)}
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 100,
            fontFamily: "'Press Start 2P', monospace",
            border: `2px solid ${isDark ? "#F5F0E8" : "#1A1A1A"}`,
            padding: "8px 10px",
            background: isDark ? "#06091a" : "#F5F0E8",
            cursor: "pointer",
            color: isDark ? "#F5F0E8" : "#1A1A1A",
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
          }}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      )}

      {/* Expanded Projects panel — outside Parallax */}
      <AnimatePresence>
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
              background: isDark ? "#0a1230" : "#f3ecdc",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                position: "fixed",
                top: 24,
                right: 24,
                zIndex: 10000,
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                border: `3px solid ${isDark ? "#F5F0E8" : "#1A1A1A"}`,
                padding: "8px 12px",
                background: isDark ? "#0a1230" : "#f3ecdc",
                cursor: "pointer",
                color: isDark ? "#F5F0E8" : "#1A1A1A",
              }}
            >
              ✕
            </button>
            <ProjectSection onExpand={() => {}} isExpanded={true} />
          </motion.div>
        )}
      </AnimatePresence>

      <FolderSection
        scrollRef={parallaxRef}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        isAboutExpanded={false}
        setIsAboutExpanded={() => {}}
        isDark={isDark}
        onFolderOpen={setIsFolderOpen}
      />

      <Parallax
        ref={parallaxRef}
        pages={1}
        style={{ background: "transparent" }}
      >
        <ParallaxLayer offset={0} speed={0.3}>
          <section
            style={{ height: "100vh" }}
            className="flex flex-col items-center justify-center"
          >
            <p
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "clamp(20px, 5vw, 48px)",
                color: isDark ? "#F5F0E8" : "#1A1A1A",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              Nadjwa Razali
            </p>
            <p
              className="font-mono text-md font-semibold md:text-base text-center"
              style={{ color: isDark ? "#f9f9f9" : "#522c0d" }}
            >
              Creative Developer, KL
            </p>
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
