"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { folderTabs } from "../data/folders";

type Props = {
  onSelect?: (tab: Folder) => void;
};

export default function FolderView({ onSelect }: Props) {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState(folderTabs[0]);

  const handleSelect = (tab: Folder) => {
    setSelectedFolder(tab);
    onSelect?.(tab); // call parent function
  };

  return (
    <div className="relative ">
      {folderTabs.map((tab, i) => {
        const isHover = hoverId === tab.id;
        const isSelected = selectedFolder === tab;

        return (
          <div key={tab.id} className="absolute" style={{ top: `${i * 40}px` }}>
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
                alt={`${tab.tab} ${tab.id}`}
              />

              {/* Label */}
              <div
                className={`absolute top-5 font-mono text-sm text-gray-800 flex flex-row gap-2 items-center px-5`}
                style={{
                  left: `${tab.titlePosition}%`,
                  backgroundColor: isSelected ? "#0022FF" : "transparent",
                  color: isSelected ? "#FFFFFF" : "#000000",
                }}
              >
                <div className="font-bold">
                  {tab.tab} {tab.id}
                </div>
                <div
                  className="text-sm"
                  style={{ color: isSelected ? "#ffffff" : "gray" }}
                >
                  {tab.label}
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
