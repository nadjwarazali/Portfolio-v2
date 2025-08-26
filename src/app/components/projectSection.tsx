import Link from "next/link";
import React from "react";

export default function ProjectSection() {
  return (
    <div className="flex flex-row w-full py-10">
      <div className="w-full">
        <div
          className="w-1/3 h-70 p-2 border border-gray-200 rounded-lg m-2 cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={() => {}}
        >
          <img
            src={"project.image"}
            alt={"project.name"}
            className="w-full h-2/3 rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{"project.name"}</h2>
          <p className="text-sm text-gray-600">{"project.description"}</p>
        </div>
      </div>
    </div>
  );
}
