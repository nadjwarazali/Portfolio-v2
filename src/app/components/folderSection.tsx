import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { folderTabs } from "../data/folders";
import Link from "next/link";
import { AboutSection } from "./aboutSection";
import { ContactSection } from "./contactSection";
import ProjectSection from "./projectSection";

export const FolderSection = () => {
  const [selectedFolder, setSelectedFolder] = useState<Folder>(folderTabs[0]);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const handleSelect = (tab: Folder) => {
    setSelectedFolder(tab);
  };
  return (
    <div className="grid grid-rows-2 bg-transparent">
      <div className="relative">
        <div>
          {folderTabs.map((tab, i) => {
            const isHover = hoverId === tab.id;
            const isSelected = selectedFolder === tab;
            return (
              <div
                key={tab.id}
                className="absolute"
                style={{ top: `${i * 40}px` }}
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
                  <img
                    src={`/assets/folder/folder-${i}.svg`}
                    className="w-full object-contain"
                    alt={`${tab.id}`}
                  />
                  <div
                    className={`absolute top-3 font-mono text-sm text-gray-800 items-center`}
                    style={{
                      left: `${tab.titlePosition}%`,
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="flex flex-row">
                      {isSelected && (
                        <div className="h-[10px] w-[10px] bg-[#0022FF] rounded-full mt-[10px] mr-2" />
                      )}
                      <div>
                        <div className="text-[16px] font-semibold">
                          {tab.label}
                        </div>
                        <div className="text-[12px] text-gray-500">
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
        <AnimatePresence>
          {selectedFolder && (
            <div className="flex justify-center absolute left-1/2 -translate-x-1/2 translate-y-90 w-full bg-white h-max-full z-10">
              <motion.div
                key={selectedFolder.id}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -100, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
                className="w-[95%] bg-white h-400 rounded-xl z-10"
              >
                <div className="p-10 font-mono">
                  {/* <p className="text-xl font-bold">{selectedFolder.label}</p>
                  <p className="font-normal text-md text-gray-500">
                    {selectedFolder.subtitle}
                  </p> */}
                  <div>
                    {(() => {
                      switch (selectedFolder.id) {
                        case "01":
                          return <AboutSection />;
                        case "02":
                          return <ProjectSection />;
                        case "03":
                          return (
                            <p className="mt-5 text-gray-700">
                              I write articles on various topics related to
                              technology, programming, and software development.
                              Check out my latest writings here.
                            </p>
                          );
                        case "04":
                          return <ContactSection />;
                        default:
                          return null;
                      }
                    })()}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
