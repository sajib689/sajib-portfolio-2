"use client";

import { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    gitUrl: "",
    previewUrl: "",
    techStack: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/dashboard/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          id: Number(formData.id),
          techStack: formData.techStack.split(","), // Convert to array
        }),
      });

      if (!response.ok) throw new Error("Failed to submit project");

      const result = await response.json();
      console.log("Success:", result);
      setFormData({ id: "", title: "", description: "", image: "", gitUrl: "", previewUrl: "", techStack: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="id" type="number" placeholder="Project ID" value={formData.id} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="title" type="text" placeholder="Project Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Project Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="image" type="text" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="gitUrl" type="url" placeholder="GitHub URL" value={formData.gitUrl} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="previewUrl" type="url" placeholder="Preview URL" value={formData.previewUrl} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="techStack" type="text" placeholder="Tech Stack (comma-separated)" value={formData.techStack} onChange={handleChange} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
