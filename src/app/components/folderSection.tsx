import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { folderTabs } from "../data/folders";
import dynamic from "next/dynamic";

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
                {/* Folder */}
                <motion.div
                  className="cursor-pointer relative z-10"
                  onHoverStart={() => setHoverId(tab.id)}
                  onHoverEnd={() => setHoverId(null)}
                  onClick={handleSelect.bind(null, tab)}
                  animate={{
                    y: isHover ? (isSelected ? -50 : -10) : 40,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Folder image */}
                  <img
                    src={`/assets/folder/folder-${i}.svg`}
                    className="w-full object-contain"
                    alt={`${tab.id}`}
                  />

                  {/* Label */}
                  <div
                    className={`absolute top-5 font-mono text-sm text-gray-800 items-center`}
                    style={{
                      left: `${tab.titlePosition}%`,
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="flex flex-row">
                      {isSelected && (
                        <div className="h-[8px] w-[8px] bg-[#0022FF] rounded-full mt-[6px] mr-2" />
                      )}
                      <div>
                        <div className="font-bold">{tab.label}</div>
                        <div className="text-sm text-gray-500">
                          {tab.categories}
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
                  <p className="text-xl font-bold">{selectedFolder.label}</p>
                  <p className="font-normal text-md text-gray-500">
                    {selectedFolder.categories}
                  </p>
                  <div className="flex flex-row w-full py-10">
                    <div className="w-1/3 h-70 p-2 border border-gray-200 rounded-lg m-2 cursor-pointer hover:shadow-lg transition-shadow duration-200">
                      <img
                        src={"project.image"}
                        alt={"project.name"}
                        className="w-full h-2/3 rounded-lg"
                      />
                      <h2 className="text-lg font-semibold mt-2">
                        {"project.name"}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {"project.description"}
                      </p>
                    </div>
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
