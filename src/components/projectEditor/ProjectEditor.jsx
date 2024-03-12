import React from "react";

const ProjectEditor = ({ currentProject }) => {
  return (
    <div>
      <h2>Project: {currentProject.title}</h2>
      {currentProject.sections.map((section, index) => (
        <div>
          <p>{section.title}</p>
          <textarea />
          {section.subSections.map((subSection, index) => (
            <p>{subSection[index]}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectEditor;
