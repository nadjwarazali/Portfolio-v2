"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

type ProjectSectionProps = {
  onExpand: () => void;
  isExpanded?: boolean;
  isDark?: boolean;
};

export default function ProjectSection({
  isDark = false,
}: ProjectSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const heading = isDark ? "#F5F0E8" : "#1A1A1A";
  const subtitle = isDark ? "#A09A95" : "#6B6560";
  const divider = isDark ? "#1e2d50" : "#C8BFB0";
  const titleCol = isDark ? "#F5F0E8" : "#1A1A1A";
  const metaCol = isDark ? "#5DD9FF" : "#6B6560";
  const descCol = isDark ? "#A09A95" : "#4B5563";
  const tagBg = isDark ? "rgba(0,194,255,0.12)" : "rgba(26,26,26,0.08)";
  const tagText = isDark ? "#5DD9FF" : "#1A1A1A";
  const previewBg = isDark ? "#0d1535" : "#F5F0E8";
  const previewBorder = isDark ? "#1e2d50" : "#C8BFB0";
  const gridLine = isDark ? "rgba(93,217,255,0.07)" : "rgba(26,26,26,0.06)";

  const activeIndex = hoveredIndex !== null ? hoveredIndex : expandedIndex;
  const hovered = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Section header */}
      <div className="px-6 md:px-10 pt-8" style={{ flexShrink: 0 }}>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "14px",
            color: heading,
            marginBottom: 8,
          }}
        >
          Projects
        </p>
      </div>

      {/* Two-column body */}
      <div
        style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}
      >
        {/* Left: Preview panel — fixed, does not scroll */}
        <div
          className="hidden md:block"
          style={{
            width: "42%",
            padding: "24px 40px 0",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <div className="w-full">
            <div
              style={{
                border: `2px solid ${previewBorder}`,
                background: previewBg,
                aspectRatio: "5/3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
                backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 19px,${gridLine} 19px,${gridLine} 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,${gridLine} 19px,${gridLine} 20px)`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AnimatePresence mode="wait">
                  {hovered ? (
                    <motion.div
                      key={hovered.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        textAlign: "center",
                        padding: "24px",
                        width: "100%",
                      }}
                    >
                      {!hovered.imgSrc && (
                        <>
                          <p
                            style={{
                              fontFamily: "'Press Start 2P', monospace",
                              fontSize: "8px",
                              color: metaCol,
                              marginBottom: 12,
                            }}
                          >
                            {hovered.company}
                          </p>
                          <p
                            style={{
                              fontFamily: "'Press Start 2P', monospace",
                              fontSize: "10px",
                              color: titleCol,
                              lineHeight: 1.8,
                            }}
                          >
                            {hovered.title}
                          </p>
                        </>
                      )}
                      {hovered.imgSrc && (
                        <img
                          src={hovered.imgSrc}
                          alt={hovered.title}
                          style={{
                            width: "100%",
                            marginTop: 16,
                            objectFit: "cover",
                            imageRendering: "auto",
                          }}
                        />
                      )}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        fontFamily: "monospace",
                        fontSize: "11px",
                        color: metaCol,
                      }}
                    >
                      hover a project
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Right: List — scrolls independently */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 pt-4 pb-64 md:pb-54">
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                borderBottom: `1px solid ${divider}`,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setExpandedIndex(null);
              }}
              onClick={() =>
                setExpandedIndex((prev) => (prev === i ? null : i))
              }
            >
              <div className="flex flex-row justify-between items-baseline py-4 gap-4">
                <p
                  className="text-sm font-semibold"
                  style={{ color: titleCol }}
                >
                  {project.title}
                </p>
                <p className="text-xs shrink-0" style={{ color: metaCol }}>
                  {project.date}
                </p>
              </div>

              <AnimatePresence initial={false}>
                {(hoveredIndex === i || expandedIndex === i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pb-4">
                      <p className="text-xs mb-1" style={{ color: metaCol }}>
                        {project.company}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: descCol }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-row flex-wrap mt-3 gap-1">
                        {project.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1"
                            style={{ background: tagBg, color: tagText }}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
