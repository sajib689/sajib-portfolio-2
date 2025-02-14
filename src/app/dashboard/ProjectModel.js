import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    gitUrl: { type: String },
    previewUrl: { type: String },
    techStack: { type: [String], required: true },
});

const ProjectModel = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default ProjectModel;
