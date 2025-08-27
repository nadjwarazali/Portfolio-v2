import React from "react";
import { projects } from "../data/projects";

export default function ProjectSection() {
  return (
    <div className="flex flex-col col-start-2 justify-center md:px-20 pt-10">
      <div className="flex flex-col px-10">
        <p className="text-xl font-bold">Project Highlights</p>
        <p className="font-normal text-md text-gray-500">
          Highlights from projects I’ve created and contributed to
        </p>
      </div>
      <div className="flex flex-row px-8 pb-5 md:pb-10 md:justify-center gap-2 md:gap-5 mt-5 scrollbar-hide overflow-x-auto">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="h-full w-[320px] md:w-full ml-2 p-5 border border-2 border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-200 flex-shrink-0 md:flex-shrink"
              onClick={() => {}}
            >
              <img
                src={`${project.imgSrc}`}
                className="w-full h-[300px] rounded-lg border-1 border-gray-100 object-cover"
              />
              <div className="h-1/3 p-3 mt-2">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
                <div className="flex flex-row flex-wrap mt-7 gap-1">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-200 text-gray-800 rounded-full px-3 py-1"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start ml-2 px-10">
        <a href="">
          <button className="group flex flex-row cursor-pointer items-center">
            <div className="border border-1 w-7 mr-3 mt-1 group-hover:border-[#0022FF] transition-colors duration-200"></div>
            <p className="font-mono text-lg font-bold group-hover:text-[#0022FF] transition-colors duration-200">
              See More Projects
            </p>
          </button>
        </a>
      </div>
    </div>
  );
}
