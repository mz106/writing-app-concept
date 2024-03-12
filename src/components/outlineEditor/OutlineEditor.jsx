// src/components/OutlineEditor.js
import React, { useState, useEffect } from "react";

function OutlineEditor({
  onSave,
  currentProject,
  setCurrentProject,
  sections,
  setSections,
  projects,
  setProjects,
}) {
  //   const [sections, setSections] = useState([...currentProject.sections]);

  useEffect(() => {
    console.log("hello from useEffect");
    setSections([...currentProject.sections, { title: "", subSections: [""] }]);
  }, [currentProject]);

  const handleSectionChange = (index, event) => {
    const updatedSections = [...sections];
    updatedSections[index].title = event.target.value;
    setSections(updatedSections);
  };

  const handleSubSectionChange = (sectionIndex, subSectionIndex, event) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subSections[subSectionIndex] =
      event.target.value;
    setSections(updatedSections);
  };

  const addSection = () => {
    // if (currentProject.sections.length > 0) {
    //   setSections([
    //     ...currentProject.sections,
    //     { title: "", subSections: [""] },
    //   ]);
    //   return;
    // }
    // setSections([{ title: "", subSections: [""] }]);
    console.log("hello: ", sections);
    setSections([...sections, { title: "", subSections: [""] }]);
  };

  const addSubSection = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subSections.push("");
    setSections(updatedSections);
  };

  const handleSave = () => {
    console.log(projects);
    // Validate if there's at least one section with a title
    const hasTitle = sections.some((section) => section.title.trim() !== "");
    if (!hasTitle) {
      alert("Please add at least one section title");
      return;
    }
    // const tempPro = [...projects];

    // for (let pro in tempPro) {
    //   if (pro.title === currentProject.title) {
    //     pro.sections = sections;
    //   }
    // }

    // setProjects([...tempPro]);
    onSave(sections, currentProject, setCurrentProject, projects, setProjects);
  };

  return (
    <div>
      <h2>Outline Editor</h2>
      <p>Project: {currentProject.title}</p>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <input
            type="text"
            placeholder="Section title"
            value={section.title}
            onChange={(e) => handleSectionChange(sectionIndex, e)}
          />
          <button onClick={() => addSubSection(sectionIndex)}>
            Add Sub-Section
          </button>
          {section.subSections.map((subSection, subSectionIndex) => (
            <div key={subSectionIndex} style={{ marginLeft: "20px" }}>
              <input
                type="text"
                placeholder="Sub-section title"
                value={subSection}
                onChange={(e) =>
                  handleSubSectionChange(sectionIndex, subSectionIndex, e)
                }
              />
            </div>
          ))}
        </div>
      ))}
      <button onClick={addSection}>Add Section</button>
      <button onClick={handleSave}>Save Outline</button>
    </div>
  );
}

export default OutlineEditor;
