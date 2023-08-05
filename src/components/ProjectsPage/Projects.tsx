/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { projects } from "../Data";
import { Project } from "../Interface";
import ProjectOptions from "./ProjectOptions";

const Projects = () => {
  const [currentOption, setCurrentOption] = useState("All");
  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
      <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-3 rounded">
        <div className="shadow-lg">
          <img className="w-full" src={"/download.jpg"} alt={project.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.name}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="container  py-10">
      <p className="text-5xl  font-bold">Projects</p>
      <ProjectOptions
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />

      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
