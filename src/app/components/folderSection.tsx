import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { folderTabs } from "../data/folders";
import AboutSection from "./aboutSection";
import ConnectSection from "./connectSection";
import ProjectSection from "./projectSection";

// Each shape is a horizontal line running the full width of the viewBox,
// with a raised "folder tab" bump sitting on the line at a fixed position.
// These paths are taken directly from the original folder SVGs, just
// cropped to the visible line+tab band (full bodies were blank below it).
const desktopShapes = [
  {
    viewBox: "0 0 2220 250",
    fill: "M950.902 61.371C954.168 72.4188 964.315 80 975.835 80H2218C2219.07 80 2219.94 80.838 2219.99 81.8926C2220 81.9279 2220 81.9637 2220 82V300H0V82C1.07626e-06 81.9519 0.00323147 81.9047 0.00976562 81.8584C0.00815227 81.8698 0.00610839 81.8811 0.00488281 81.8926C0.0607527 80.838 0.931505 80 2 80H552.165C563.685 80 573.832 72.4188 577.098 61.3709L589.438 19.629C592.704 8.58123 602.851 1 614.371 1H913.629C925.149 1 935.296 8.58125 938.562 19.6291L950.902 61.371Z",
    stroke:
      "M0 81H552.49C564.403 81 574.792 72.9042 577.702 61.3526L587.959 20.6475C590.869 9.09586 601.258 1 613.171 1H914.738C926.651 1 937.04 9.0959 939.95 20.6475L950.207 61.3525C953.117 72.9041 963.506 81 975.419 81H2220",
  },
  {
    viewBox: "0 0 2220 200",
    fill: "M1338.2 61.3707C1341.46 72.4186 1351.61 80 1363.13 80H2218C2219.07 80 2219.94 80.838 2219.99 81.8926C2220 81.9279 2220 81.9637 2220 82V200H0V82C1.07626e-06 81.9519 0.00323147 81.9047 0.00976562 81.8584C0.00815227 81.8698 0.00610839 81.8811 0.00488281 81.8926C0.0607527 80.838 0.931505 80 2 80H938.87C950.39 80 960.537 72.4187 963.803 61.3707L976.438 18.6293C979.704 7.58135 989.851 0 1001.37 0H1300.63C1312.15 0 1322.3 7.58135 1325.56 18.6293L1338.2 61.3707Z",
    stroke:
      "M0 81.0001L939.081 81C950.994 81 961.383 72.9042 964.293 61.3526L974.55 20.6475C977.46 9.09585 987.849 1 999.762 1L1301.74 1.00005C1313.65 1.00006 1324.04 9.09595 1326.95 20.6476L1337.21 61.3526C1340.12 72.9042 1350.51 81.0001 1362.42 81.0001H2220",
  },
  {
    viewBox: "0 0 2220 200",
    fill: "M1716.91 61.3531C1720.17 72.4098 1730.32 80 1741.85 80H2218C2219.07 80.0001 2219.94 80.8381 2219.99 81.8926C2220 81.9279 2220 81.9637 2220 82V200H0V82C3.08372e-06 81.8623 0.0269744 81.7308 0.0771484 81.6113C0.0400458 81.6993 0.0154191 81.7939 0.00488281 81.8926C0.0607575 80.838 0.931508 80 2 80H1319.15C1330.68 80 1340.83 72.4098 1344.09 61.3531L1356.38 19.6469C1359.64 8.59017 1369.8 1 1381.32 1H1679.68C1691.2 1 1701.36 8.59016 1704.62 19.6469L1716.91 61.3531Z",
    stroke:
      "M0 81H1319.49C1331.4 81 1341.79 72.9042 1344.7 61.3526L1354.96 20.6474C1357.87 9.09585 1368.26 1 1380.17 1H1680.74C1692.65 1 1703.04 9.0959 1705.95 20.6475L1716.21 61.3525C1719.12 72.9041 1729.51 81 1741.42 81H2220",
  },
  {
    viewBox: "0 0 2221 200",
    fill: "M1083.86 61.7826C1087.1 72.8747 1097.27 80.5 1108.82 80.5H2218C2219.07 80.5001 2219.94 81.3381 2219.99 82.3926C2220 82.4279 2220 82.4637 2220 82.5V200H1V82.5C3.08372e-06 82.3623 0.0269744 82.2308 0.0771484 82.1113C0.0400458 82.1993 0.0154191 82.2939 0.00488281 82.3926C0.0607575 81.338 0.931508 80.5 2 80.5H689.995C701.55 80.5 711.718 72.8747 714.955 61.7827L727.083 20.2174C730.319 9.12535 740.487 1.5 752.042 1.5H1046.78C1058.33 1.5 1068.5 9.12534 1071.74 20.2173L1083.86 61.7826Z",
    stroke:
      "M1 81H690.49C702.403 81 712.792 72.9042 715.702 61.3526L725.959 20.6474C728.869 9.09585 739.258 1 751.171 1H1047.74C1059.65 1 1070.04 9.0959 1072.95 20.6475L1083.21 61.3525C1086.12 72.9041 1096.51 81 1108.42 81H2221",
  },
];

const mobileShapes = [
  {
    viewBox: "0 0 430 120",
    fill: "M228.719 36.678C232.086 47.5713 242.157 55 253.559 55H428C429.068 55 429.938 55.8381 429.994 56.8926C429.998 56.9279 430 56.9637 430 57V120H0V57C6.24178e-06 56.9522 0.00425775 56.9054 0.0107422 56.8594C0.00917491 56.8705 0.00608008 56.8814 0.00488281 56.8926C0.0608075 55.8381 0.931542 55 2 55H6.87805C18.5213 55 28.745 47.2593 31.9032 36.0526L36.1602 20.9474C39.3185 9.74069 49.5422 2 61.1854 2H198.823C210.225 2 220.296 9.42867 223.663 20.322L228.719 36.678Z",
    stroke:
      "M0 55.6034H5.22559C16.19 55.6034 25.976 48.7251 29.6892 38.4086L36.5918 19.2308C40.2939 8.94519 50.0343 2.07379 60.9658 2.0361L198.669 1.56129C209.386 1.52433 219.028 8.06708 222.953 18.0398L231.015 38.5259C234.928 48.4681 244.524 55.0045 255.209 55.0045L430 55.0046",
  },
  {
    viewBox: "0 0 430 120",
    fill: "M329.719 36.178C333.086 47.0713 343.157 54.5 354.559 54.5H428C429.068 54.5 429.938 55.338 429.994 56.3926C429.998 56.4279 430 56.4637 430 56.5V120H0V56.5C1.07626e-06 56.4519 0.00323147 56.4047 0.00976562 56.3584C0.00815227 56.3698 0.00610839 56.3811 0.00488281 56.3926C0.0607527 55.338 0.931505 54.5 2 54.5H107.878C119.521 54.5 129.745 46.7593 132.903 35.5526L137.16 20.4474C140.319 9.24069 150.542 1.5 162.185 1.5H299.823C311.225 1.5 321.296 8.92867 324.663 19.822L329.719 36.178Z",
    stroke:
      "M0 55.1034H106.226C117.19 55.1034 126.976 48.2251 130.689 37.9086L137.592 18.7308C141.294 8.44518 151.034 1.57379 161.966 1.5361L299.669 1.06129C310.386 1.02433 320.028 7.56708 323.953 17.5397L332.015 38.0259C335.928 47.9681 345.524 54.5045 356.209 54.5045H430",
  },
  {
    viewBox: "0 0 430 120",
    fill: "M49.2813 36.178C45.9143 47.0713 35.8427 54.5 24.4409 54.5H2C0.931546 54.5 0.0618089 55.3381 0.00585938 56.3926C0.00208522 56.4279 3.92937e-06 56.4637 0 56.5V120H430V56.5C430 56.4522 429.996 56.4054 429.989 56.3594C429.991 56.3705 429.994 56.3814 429.995 56.3926C429.939 55.3381 429.068 54.5 428 54.5H271.122C259.479 54.5 249.255 46.7593 246.097 35.5526L241.84 20.4474C238.681 9.24069 228.458 1.5 216.815 1.5H79.1773C67.7754 1.5 57.7039 8.92867 54.3368 19.822L49.2813 36.178Z",
    stroke:
      "M430 55.1035H272.275C261.31 55.1035 251.524 48.2252 247.811 37.9087L240.908 18.7305C237.206 8.44513 227.466 1.57377 216.535 1.53587L79.7747 1.06164C69.0575 1.02447 59.4155 7.56725 55.4907 17.5401L47.4286 38.0259C43.5159 47.9681 33.9192 54.5045 23.2348 54.5045H0",
  },
  {
    viewBox: "0 0 430 120",
    fill: "M201.281 36.178C197.914 47.0713 187.843 54.5 176.441 54.5H2C0.931549 54.5 0.0617981 55.3381 0.00585938 56.3926C0.0020752 56.4279 0 56.4637 0 56.5V120H430V56.5C430 56.4522 429.996 56.4054 429.989 56.3594C429.991 56.3705 429.994 56.3814 429.995 56.3926C429.939 55.3381 429.068 54.5 428 54.5H423.122C411.479 54.5 401.255 46.7593 398.097 35.5526L393.84 20.4474C390.681 9.24069 380.458 1.5 368.815 1.5H231.177C219.775 1.5 209.704 8.92867 206.337 19.822L201.281 36.178Z",
    stroke:
      "M430 55.1034H424.774C413.81 55.1034 404.024 48.2251 400.311 37.9086L393.408 18.7308C389.706 8.44519 379.966 1.57379 369.034 1.5361L231.331 1.06129C220.614 1.02433 210.972 7.56708 207.047 17.5398L198.985 38.0259C195.072 47.9681 185.476 54.5045 174.791 54.5045L0 54.5046",
  },
];

const svgStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
};

type FolderSectionProp = {
  scrollRef: React.RefObject<{
    scrollTo: (value: number) => void;
    container?: React.RefObject<HTMLElement | null>;
  } | null>;
};
export const FolderSection = ({ scrollRef }: FolderSectionProp) => {
  const [selectedFolder, setSelectedFolder] = useState<Folder>(folderTabs[0]);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const parallaxContainer = scrollRef.current?.container?.current;
    if (isExpanded) {
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
  }, [isExpanded, scrollRef]);

  const parallaxRef = scrollRef;
  const isMobile = window.innerWidth <= 768;

  const handleSelect = (tab: Folder) => {
    parallaxRef.current?.scrollTo(1);

    setSelectedFolder(tab);
  };
  return (
    <LayoutGroup>
      <div className="bg-transparent" style={{ minHeight: "100vh" }}>
        <div className="relative">
          <div
            className="relative"
            style={{
              paddingBottom: isMobile
                ? `calc(${3 * 45}px + 16.2791%)`
                : `calc(${3 * 40}px + 4.5045%)`,
            }}
          >
            {folderTabs.map((tab, i) => {
              const isHover = hoverId === tab.id;
              const isSelected = selectedFolder === tab;
              return (
                <div
                  key={tab.id}
                  className="absolute left-0 right-0 "
                  style={{ top: isMobile ? `${i * 45}px` : `${i * 40}px` }}
                >
                  <motion.div
                    className="cursor-pointer relative z-10"
                    onHoverStart={() => setHoverId(tab.id)}
                    onHoverEnd={() => setHoverId(null)}
                    onClick={handleSelect.bind(null, tab)}
                    animate={{
                      y: isHover ? -10 : 30,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative">
                      {/* Mobile shape */}
                      <svg
                        className="block md:hidden"
                        style={svgStyle}
                        viewBox={mobileShapes[i].viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d={mobileShapes[i].fill} fill="white" />
                        <path
                          d={mobileShapes[i].stroke}
                          stroke="#0022FF"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>

                      {/* Desktop shape */}
                      <svg
                        className="hidden md:block"
                        style={svgStyle}
                        viewBox={desktopShapes[i].viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d={desktopShapes[i].fill} fill="white" />
                        <path
                          d={desktopShapes[i].stroke}
                          stroke="#0022FF"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div
                      className={`absolute top-4 md:top-3 font-mono text-sm text-gray-800 items-center bg-transparent`}
                      style={{
                        left: `${
                          isMobile
                            ? tab.titlePositionMobile
                            : tab.titlePositionDesktop
                        }%`,
                      }}
                    >
                      <div className="flex flex-row">
                        {isSelected && (
                          <div className="h-[10px] w-[10px] bg-[#0022FF] rounded-full mt-[7px] md:mt-[10px] mr-2" />
                        )}
                        <div>
                          <div className="text-[16px] font-semibold">
                            {tab.label}
                          </div>
                          <div className="hidden md:block text-[12px] text-gray-500">
                            {tab.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isExpanded && selectedFolder.id === "02" ? (
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
                zIndex: 50,
                background: "white",
                overflowY: "auto",
                margin: 0,
                padding: 0,
              }}
            >
              <button
                onClick={() => setIsExpanded(false)}
                style={{ position: "fixed", top: 24, right: 24, zIndex: 51 }}
                className="font-mono text-sm border border-[#0022FF] text-[#0022FF] px-4 py-2 rounded-full"
              >
                ✕ Close
              </button>
              <ProjectSection onExpand={() => {}} isExpanded={true} />
            </motion.div>
          ) : (
            selectedFolder && (
              <div className="flex justify-center w-full bg-white z-20">
                <motion.div
                  key={selectedFolder.id}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                  }}
                  className="w-full bg-white pt-[50px]"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="font-mono">
                    <div>
                      {(() => {
                        switch (selectedFolder.id) {
                          case "01":
                            return <AboutSection />;
                          case "02":
                            return (
                              <ProjectSection
                                onExpand={() => setIsExpanded(true)}
                              />
                            );
                          case "03":
                            return (
                              <p className="mt-5 text-gray-700 p-10 ">
                                No article yet. Stay tuned!
                              </p>
                            );
                          case "04":
                            return <ConnectSection />;
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};
