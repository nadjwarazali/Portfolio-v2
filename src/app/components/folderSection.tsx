import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { folderTabs } from "../data/folders";
import AboutSection from "./aboutSection";
import ProjectSection from "./projectSection";
import ExperimentSection from "./experimentSection";

const svgStyle = {
  width: "100%",
  display: "block",
  imageRendering: "pixelated" as const,
  shapeRendering: "crispEdges" as const,
};

const desktopShapes = [
  {
    viewBox: "0 0 2220 350",
    fill: "M0,80 H540 V70 H550 V60 H560 V50 H570 V40 H580 V30 H590 V20 H600 V10 H610 V2 H914 V10 H924 V20 H934 V30 H944 V40 H954 V50 H964 V60 H974 V70 H984 V80 H2220 V350 H0 Z",
    stroke:
      "M0,350 V80 H540 V70 H550 V60 H560 V50 H570 V40 H580 V30 H590 V20 H600 V10 H610 V2 H914 V10 H924 V20 H934 V30 H944 V40 H954 V50 H964 V60 H974 V70 H984 V80 H2220 V350",
  },
  {
    viewBox: "0 0 2220 300",
    fill: "M0,80 H929 V70 H939 V60 H949 V50 H959 V40 H969 V30 H979 V20 H989 V10 H999 V2 H1301 V10 H1311 V20 H1321 V30 H1331 V40 H1341 V50 H1351 V60 H1361 V70 H1371 V80 H2220 V300 H0 Z",
    stroke:
      "M0,300 V80 H929 V70 H939 V60 H949 V50 H959 V40 H969 V30 H979 V20 H989 V10 H999 V2 H1301 V10 H1311 V20 H1321 V30 H1331 V40 H1341 V50 H1351 V60 H1361 V70 H1371 V80 H2220 V300",
  },
  {
    viewBox: "0 0 2220 300",
    fill: "M0,80 H1309 V70 H1319 V60 H1329 V50 H1339 V40 H1349 V30 H1359 V20 H1369 V10 H1379 V2 H1680 V10 H1690 V20 H1700 V30 H1710 V40 H1720 V50 H1730 V60 H1740 V70 H1750 V80 H2220 V300 H0 Z",
    stroke:
      "M0,300 V80 H1309 V70 H1319 V60 H1329 V50 H1339 V40 H1349 V30 H1359 V20 H1369 V10 H1379 V2 H1680 V10 H1690 V20 H1700 V30 H1710 V40 H1720 V50 H1730 V60 H1740 V70 H1750 V80 H2220 V300",
  },
];

const mobileShapes = [
  {
    viewBox: "0 0 430 79",
    fill: "M0,38 H6 V34 H11 V30 H16 V26 H21 V22 H26 V18 H31 V14 H36 V10 H41 V6 H46 V2 H199 V6 H204 V10 H209 V14 H214 V18 H219 V22 H224 V26 H229 V30 H234 V34 H239 V38 H430 V79 H0 Z",
    stroke:
      "M0,38 H6 V34 H11 V30 H16 V26 H21 V22 H26 V18 H31 V14 H36 V10 H41 V6 H46 V2 H199 V6 H204 V10 H209 V14 H214 V18 H219 V22 H224 V26 H229 V30 H234 V34 H239 V38 H430",
  },
  {
    viewBox: "0 0 430 79",
    fill: "M0,38 H172 V34 H177 V30 H182 V26 H187 V22 H192 V18 H197 V14 H202 V10 H207 V6 H212 V2 H360 V6 H365 V10 H370 V14 H375 V18 H380 V22 H385 V26 H390 V30 H395 V34 H400 V38 H430 V79 H0 Z",
    stroke:
      "M0,38 H172 V34 H177 V30 H182 V26 H187 V22 H192 V18 H197 V14 H202 V10 H207 V6 H212 V2 H360 V6 H365 V10 H370 V14 H375 V18 H380 V22 H385 V26 H390 V30 H395 V34 H400 V38 H430",
  },
  {
    viewBox: "0 0 430 79",
    fill: "M0,38 H29 V34 H34 V30 H39 V26 H44 V22 H49 V18 H54 V14 H59 V10 H64 V6 H69 V2 H217 V6 H222 V10 H227 V14 H232 V18 H237 V22 H242 V26 H247 V30 H252 V34 H257 V38 H430 V79 H0 Z",
    stroke:
      "M430,38 H257 V34 H252 V30 H247 V26 H242 V22 H237 V18 H232 V14 H227 V10 H222 V6 H217 V2 H69 V6 H64 V10 H59 V14 H54 V18 H49 V22 H44 V26 H39 V30 H34 V34 H29 V38 H0",
  },
];

const desktopHighlights = [
  "M620,16 H640 V26 H620 Z M610,26 H620 V36 H610 Z M600,36 H610 V46 H600 Z",
  "M1009,16 H1029 V26 H1009 Z M999,26 H1009 V36 H999 Z M989,36 H999 V46 H989 Z",
  "M1389,16 H1409 V26 H1389 Z M1379,26 H1389 V36 H1379 Z M1369,36 H1379 V46 H1369 Z",
];

const mobileHighlights = [
  "M55,8 H65 V12 H55 Z M50,12 H55 V16 H50 Z M45,16 H50 V20 H45 Z",
  "M221,8 H231 V12 H221 Z M216,12 H221 V16 H216 Z M211,16 H216 V20 H211 Z",
  "M78,8 H88 V12 H78 Z M73,12 H78 V16 H73 Z M68,16 H73 V20 H68 Z",
];

const tabColors = ["#973535", "#1f7522", "#2a5d93"];
const tabStrokeColors = ["#6A2525", "#2B3F2B", "#132940"];
const highlightColors = ["#C4556A", "#6A9B6C", "#3D6A9B"];

const darkTabColors = ["#FF1654", "#0AFFAD", "#00C2FF"];
const darkTabStrokeColors = ["#CC0040", "#00CC88", "#0099CC"];
const darkHighlightColors = ["#FF6B8A", "#5DFFD0", "#5DD9FF"];

const tabWidths = ["98%", "99%", "100%"];

type FolderSectionProp = {
  scrollRef: React.RefObject<{
    scrollTo: (value: number) => void;
    container?: React.RefObject<HTMLElement | null>;
  } | null>;
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
  isAboutExpanded: boolean;
  setIsAboutExpanded: (v: boolean) => void;
  isDark: boolean;
  onFolderOpen?: (isOpen: boolean) => void;
};
export const FolderSection = ({
  scrollRef,
  isExpanded,
  setIsExpanded,
  isAboutExpanded,
  setIsAboutExpanded,
  isDark,
  onFolderOpen,
}: FolderSectionProp) => {
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [nameHovered, setNameHovered] = useState(false);

  useEffect(() => {
    onFolderOpen?.(selectedFolder !== null);
  }, [selectedFolder, onFolderOpen]);

  useEffect(() => {
    const parallaxContainer = scrollRef.current?.container?.current;
    const shouldLock = isExpanded || isAboutExpanded;
    if (shouldLock) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (parallaxContainer) {
        parallaxContainer.style.overflowY = "hidden";
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (parallaxContainer) {
        parallaxContainer.style.overflowY = "scroll";
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (parallaxContainer) {
        parallaxContainer.style.overflowY = "scroll";
      }
    };
  }, [isExpanded, isAboutExpanded, scrollRef]);

  const parallaxRef = scrollRef;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabsVisible, setTabsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTabsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (tabsRef.current) observer.observe(tabsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (tab: Folder) => {
    setSelectedFolder((prev) => (prev?.id === tab.id ? null : tab));
  };

  const hoverTab = hoverId
    ? (folderTabs.find((t) => t.id === hoverId) ?? null)
    : null;
  const hoverTabIndex = hoverId
    ? folderTabs.findIndex((t) => t.id === hoverId)
    : -1;

  const renderContent = () => {
    switch (selectedFolder?.id) {
      case "01":
        return (
          <div style={{ height: "100%", overflowY: "auto" }}>
            <AboutSection isDark={isDark} />
            <div style={{ height: isMobile ? "200px" : "280px" }} />
          </div>
        );
      case "02":
        return (
          <ProjectSection
            onExpand={() => setIsExpanded(true)}
            isDark={isDark}
          />
        );
      case "03":
        return <ExperimentSection isDark={isDark} />;
      default:
        return null;
    }
  };
  return (
    <LayoutGroup>
      {/* Slide-up content panel */}
      <AnimatePresence mode="wait">
        {selectedFolder && (
          <motion.div
            key={selectedFolder.id}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.15 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 15,
              background: isDark ? "#0a1230" : "#F5F0E8",
              borderTop: `4px solid ${isDark ? "#F5F0E8" : "#1A1A1A"}`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header: name/email left, close right */}
            <div
              style={{
                flexShrink: 0,
                zIndex: 16,
                background: isDark ? "#0a1230" : "#F5F0E8",
                borderBottom: `1px solid ${isDark ? "#1e2d50" : "#C8BFB0"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
              }}
            >
              <a
                href={nameHovered ? "mailto:nadjwarazali@gmail.com" : undefined}
                onMouseEnter={() => setNameHovered(true)}
                onMouseLeave={() => setNameHovered(false)}
                style={{
                  cursor: nameHovered ? "pointer" : "default",
                  textDecoration: "none",
                  minWidth: 160,
                }}
              >
                <AnimatePresence mode="wait">
                  {nameHovered ? (
                    <motion.p
                      key="email"
                      initial={{ opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 3 }}
                      transition={{ duration: 0.1 }}
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: "10px",
                        color: isDark ? "#0AFFAD" : "#8B0000",
                        lineHeight: 1.8,
                      }}
                    >
                      nadjwarazali@gmail.com
                    </motion.p>
                  ) : (
                    <motion.p
                      key="name"
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.1 }}
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: "14px",
                        color: isDark ? "#F5F0E8" : "#1A1A1A",
                        lineHeight: 1.8,
                      }}
                    >
                      Nadjwa Razali
                    </motion.p>
                  )}
                </AnimatePresence>
              </a>
              <button
                onClick={() => setSelectedFolder(null)}
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "10px",
                  border: `3px solid ${isDark ? "#F5F0E8" : "#1A1A1A"}`,
                  padding: "8px 12px",
                  background: isDark ? "#0a1230" : "#F5F0E8",
                  cursor: "pointer",
                  color: isDark ? "#F5F0E8" : "#1A1A1A",
                  flexShrink: 0,
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ flex: 1, overflow: "hidden", minHeight: 0 }}>
              {renderContent()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover peek — peeks up behind tab stack on hover */}
      <AnimatePresence>
        {hoverId && !selectedFolder && hoverTab && (
          <motion.div
            key={hoverId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "tween", duration: 0.12 }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9,
              paddingTop: "20px",
              paddingLeft: "32px",
              paddingRight: "32px",
              paddingBottom: isMobile ? "80px" : "180px",
              background: isDark ? "#0a1230" : "#F5F0E8",
              borderTop: `3px solid ${isDark ? darkTabColors[hoverTabIndex] : tabColors[hoverTabIndex]}`,
            }}
          >
            <p
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                color: isDark ? "#F5F0E8" : "#1A1A1A",
                marginBottom: 8,
              }}
            >
              {hoverTab.label}
            </p>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "12px",
                color: isDark ? "#A09A95" : "#6B6560",
              }}
            >
              {hoverTab.subtitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Folder tabs — fixed at bottom */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          paddingBottom: "20px",
        }}
      >
        <div
          className="relative bg-transparent"
          ref={tabsRef}
          style={{ zIndex: 20 }}
        >
          <div
            className="relative"
            style={{
              paddingBottom: isMobile
                ? `calc(${2 * 21}px + 16.2791%)`
                : `calc(${2 * 44}px + 4.5045%)`,
            }}
          >
            {folderTabs.map((tab, i) => {
              const isHover = hoverId === tab.id;
              const isSelected = selectedFolder?.id === tab.id;
              return (
                <div
                  key={tab.id}
                  className="absolute left-0 right-0"
                  style={{
                    top: isMobile ? `${i * 30}px` : `${i * 44}px`,
                    zIndex: 10 + i,
                  }}
                >
                  <motion.div
                    className="cursor-pointer relative"
                    onHoverStart={() => setHoverId(tab.id)}
                    onHoverEnd={() => setHoverId(null)}
                    animate={{
                      y: isSelected ? (isMobile ? -2 : -8) : isHover ? -12 : 0,
                    }}
                    transition={{ type: "tween", duration: 0.08 }}
                  >
                    <div
                      className="relative"
                      onClick={handleSelect.bind(null, tab)}
                    >
                      <div
                        style={{
                          width: isMobile ? "100%" : tabWidths[i],
                          margin: "0 auto",
                          overflow: "hidden",
                        }}
                      >
                        <svg
                          style={{ ...svgStyle }}
                          viewBox={
                            isMobile
                              ? mobileShapes[i].viewBox
                              : desktopShapes[i].viewBox
                          }
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d={
                              isMobile
                                ? mobileShapes[i].fill
                                : desktopShapes[i].fill
                            }
                            fill={isDark ? darkTabColors[i] : tabColors[i]}
                            shapeRendering="crispEdges"
                          />
                          <path
                            d={
                              isMobile
                                ? mobileShapes[i].stroke
                                : desktopShapes[i].stroke
                            }
                            stroke={
                              isDark
                                ? darkTabStrokeColors[i]
                                : tabStrokeColors[i]
                            }
                            strokeWidth={isMobile ? "3" : "5"}
                            fill="none"
                            shapeRendering="crispEdges"
                          />
                          <path
                            d={
                              isMobile
                                ? mobileHighlights[i]
                                : desktopHighlights[i]
                            }
                            fill={
                              isDark
                                ? darkHighlightColors[i]
                                : highlightColors[i]
                            }
                            shapeRendering="crispEdges"
                          />
                        </svg>
                      </div>
                      <div
                        className="absolute cursor-pointer"
                        style={{
                          left: `${isMobile ? tab.titlePositionMobile : tab.titlePositionDesktop}%`,
                          top: "8px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          {isSelected && (
                            <div
                              style={{
                                width: 8,
                                height: 8,
                                background: isDark ? "#06091a" : "#F5F0E8",
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <span
                            style={{
                              fontFamily: "'Press Start 2P', monospace",
                              fontSize: isMobile ? "8px" : "10px",
                              color: isDark ? "#06091a" : "#ffffff",
                              lineHeight: 1.8,
                            }}
                          >
                            {tab.label}
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "monospace",
                            fontSize: "10px",
                            color: isDark
                              ? "rgba(6,9,26,0.65)"
                              : "rgb(242, 242, 242)",
                          }}
                        >
                          {tab.subtitle}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};
