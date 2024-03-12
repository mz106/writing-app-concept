import { useState } from "react";
import CreateProjectForm from "./components/createProjectForm/CreateProjectForm";
import ProjectList from "./components/projectList/ProjectList";
import OutlineEditor from "./components/outlineEditor/OutlineEditor";
import ProjectEditor from "./components/projectEditor/ProjectEditor";

function App() {
  const [projects, setProjects] = useState([]);
  const [sections, setSections] = useState([]);
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    sections: [],
  });

  console.log("app.jsx projects: ", projects);

  const handleCreateProject = (project, projects, setProjects) => {
    // Here you can perform actions like saving the project to a database

    setProjects([...projects, project]);
  };

  const handleSaveOutline = async (
    outline,
    currentProject,
    setCurrentProject,
    projects,
    setProjects
  ) => {
    console.log("Outline saved:", outline, currentProject.title);
    const tempOutline = [...outline];

    const filteredOutline = tempOutline.filter(
      (item) => item.title === "" || item.title === undefined
    );

    const temp = {
      title: currentProject.title,
      description: currentProject.description,
      sections: [...filteredOutline],
    };
    console.log("temp: ", temp);
    await setCurrentProject(temp);

    const tempProjects = [...projects];

    console.log("tempProjects: ", tempProjects);

    for (let pro of tempProjects) {
      if (pro.title === currentProject.title) {
        pro.spam = "hello spam";
        pro.sections = [...outline];
      }
    }

    if (currentProject.title) {
      await setProjects([...tempProjects]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Writing App</h1>
      </header>
      <main>
        <CreateProjectForm
          onCreate={handleCreateProject}
          setProjects={setProjects}
          projects={projects}
        />
        <ProjectList
          projects={projects}
          setCurrentProject={setCurrentProject}
          setSections={setSections}
          currentProject={currentProject}
        />
        <OutlineEditor
          onSave={handleSaveOutline}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          sections={sections}
          setSections={setSections}
          projects={projects}
          setProjects={setProjects}
        />
        <ProjectEditor currentProject={currentProject} />
      </main>
    </div>
  );
}

export default App;
