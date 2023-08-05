import React from "react";
import { options } from "../Data";
import { IProjectOptionsProps } from "../Interface";

const ProjectOptions: React.FC<IProjectOptionsProps> = ({
  setCurrentOption,
  currentOption,
}) => {
  return (
    <div className="py-4">
      {options.map((option, index) => {
        return (
          <button
            key={index}
            className={`  font-bold py-2 px-4 rounded inline-flex items-center mx-2 my-2 ${
              currentOption === option ? "bg-[#F4E8E4]" : ""
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
