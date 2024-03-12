// src/components/ProjectList.js
import React, { useEffect, useState } from "react";
import ProjectItem from "../projectItem/ProjectItem";

function ProjectList({
  projects,
  setCurrentProject,
  setSections,
  currentProject,
}) {
  //   useEffect(() => {
  //     // Here you can fetch the list of projects from a server or data source
  //     // For demonstration purposes, we'll just simulate some sample projects
  //     const sampleProjects = [
  //       { id: 1, title: "Project 1", description: "Description for Project 1" },
  //       { id: 2, title: "Project 2", description: "Description for Project 2" },
  //       { id: 3, title: "Project 3", description: "Description for Project 3" },
  //     ];
  //     setProjects(sampleProjects);
  //   }, []);

  return (
    <div>
      <h2>List of Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <ProjectItem
            project={project}
            key={index}
            setCurrentProject={setCurrentProject}
            setSections={setSections}
            currentProject={currentProject}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
