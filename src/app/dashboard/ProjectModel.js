import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    gitUrl: { type: String },
    previewUrl: { type: String },
    techStack: { type: [String] }
});

const ProjectModel = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default ProjectModel;
