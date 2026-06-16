import React from "react";
import { projects } from "../data/projects";

type ProjectSectionProps = {
  onExpand: () => void;
  isExpanded?: boolean;
};

export default function ProjectSection({
  onExpand,
}: ProjectSectionProps) {
  const visibleProjects = projects;

  return (
    <div className="flex flex-col col-start-2 justify-center md:px-20 pt-10">
      <div className="flex flex-col px-10">
        <p className="text-xl font-bold">Projects</p>
        <p className="font-normal text-md text-gray-500">
          Things I've built
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center px-8 pb-10 gap-5 mt-5">
        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="h-full w-[320px] p-5 border border-2 border-[#1A1A1A]/20 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-[#f3ecdc]"
            onClick={() => {}}
          >
            <div className="h-1/3 p-3 mt-2">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-row flex-wrap mt-7 gap-1">
                {project.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#1A1A1A]/10 text-[#1A1A1A] rounded-full px-3 py-1"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
