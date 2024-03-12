// src/components/CreateProjectForm.js
import React, { useState } from "react";

function CreateProjectForm({ onCreate, projects, setProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }
    // Create new project object
    const newProject = {
      title,
      description,
      sections: [],
    };
    // Pass the new project to the parent component
    onCreate(newProject, projects, setProjects);
    // Clear form fields
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Writing Project</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
}

export default CreateProjectForm;
