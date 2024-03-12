import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({
  project,
  setCurrentProject,
  setSections,
  currentProject,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    // setSections([]);
    setCurrentProject(project);
    setSections([...currentProject.sections]);
  };

  return (
    <div onClick={handleClick} className="projectitem-wrapper">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
