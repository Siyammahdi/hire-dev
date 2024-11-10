import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with custom shopping cart and payment integration.",
    category: "Web Development",
    imageUrl: "/portfolio/portfolio1.png",
  },
  {
    id: 2,
    title: "Project Management Tool",
    description: "A collaborative tool for managing projects and tasks with team members.",
    category: "Web Development",
    imageUrl: "/portfolio/portfolio2.png",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
  {
    id: 6,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },

];

const categories = ["All", "Web Development", "Mobile Development", "Marketing"];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
<ScrollArea>
<div className=" text-gray-200 h-[74vh] flex flex-col items-center py-12 px-5">
      {/* Marketing Text */}
      <div className="max-w-2xl text-center px-4 mb-10">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">Portfolio</h1>
        <p className="text-gray-300 font-light mb-6">
          At our company, we create innovative solutions tailored to meet client needs.
          From web development to marketing
        </p>
        <p className="text-lg font-light text-gray-300">
          Explore our portfolio and see the quality we deliver to help clients achieve success.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-8 font-light text-lg border-b w-full border-gray-700">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === category
                ? "bg-transparent font-medium text-white"
                : "bg-transparent text-gray-400 hover:-translate-y-1"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="relative cursor-pointer overflow-hidden group"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              height={250}
              width={250}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white rounded-lg max-w-2xl p-6 text-gray-800 w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-md mb-4"
              height={250}
              width={250}
            />
            <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
            <p className="mt-4 text-gray-600 text-base font-light">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
</ScrollArea>
  );
};

export default Portfolio;
