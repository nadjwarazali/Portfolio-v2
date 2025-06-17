"use client";
import AltCutoutAnimation from "./components/titleCard";
import Navbar from "./components/navbar";
import FolderView from "./components/folderView";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { folderTabs } from "./data/folders";
import { projects } from "./data/projects";
import { AboutSection } from "./components/aboutSection";

export default function Home() {
  const [selectedFolder, setSelectedFolder] = useState<Folder>(folderTabs[0]);

  return (
    <>
      <Navbar />
      <section className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen">
        <div className="flex flex-row gap-[32px] row-start-2">
          <AltCutoutAnimation />
          <p className="h-[200px] font-[Crimson_Text] text-8xl flex items-center justify-center">
            ARKIB
          </p>
        </div>
      </section>
      <section id="about" className="grid grid-cols-[10%_1fr_10%] ">
        <AboutSection />
      </section>
      <section
        id="projects"
        className="grid grid-rows-[20%_60%_20%] h-screen bg-white pb-50"
      >
        <div className="relative row-span-2">
          <AnimatePresence>
            {selectedFolder && (
              <motion.div
                key={selectedFolder.id}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -100, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-[-20%] w-[95%] h-[80%] bg-white border border-2 border-[#0022FF] rounded-xl shadow-md z-10"
              >
                <div className="p-10 font-mono text-sm text-gray-800">
                  <p className="font-bold">
                    {selectedFolder.tab} {selectedFolder.id}
                    <span className="font-normal text-md text-gray-500 pl-2">
                      {selectedFolder.label}
                    </span>
                  </p>
                  <h1 className="pt-5 pb-2 font-bold">Featured Projects</h1>
                  <div className="flex flex-row w-full">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="w-1/3 h-70 p-2 border border-gray-200 rounded-lg m-2 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-2/3 rounded-lg"
                        />
                        <h2 className="text-lg font-semibold mt-2">
                          {project.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="row-start-3 bg-white ">
          <FolderView onSelect={(tab: Folder) => setSelectedFolder(tab)} />
        </div>
      </section>
      <section id="contact" className="h-screen bg-gray-50">
        ...
      </section>
    </>
  );
}
