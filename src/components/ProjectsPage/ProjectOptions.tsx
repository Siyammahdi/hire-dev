import React from "react";
import { options } from "../Data";
import { IProjectOptionsProps } from "../Interface";

const ProjectOptions: React.FC<IProjectOptionsProps> = ({
  setCurrentOption,
  currentOption,
}) => {
  return (
    <div className="py-4 text-end">
      {options.map((option, index) => {
        return (
          <button
            key={index}
            className={`text-xs   py-2 px-1 rounded inline-flex items-center mx-1 my-2 ${
              currentOption === option ? "font-bold" : ""
            }`}
            onClick={() => setCurrentOption(option)}
          >
            <span className="mr-2">{option}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectOptions;
