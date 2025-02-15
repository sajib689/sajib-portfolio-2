import ConnectDb from "@/DB/ConnectDb";
import ProjectModel from "../ProjectModel";


export async function POST(req) {
    try {
        const body = await req.json(); 
        const { id, title, description, image, gitUrl, previewUrl, techStack } = body;

        if (!id || !title || !description) {
            return new Response(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400 }
            );
        }

        await ConnectDb(); 

        const newProject = new ProjectModel({
            id,
            title,
            description,
            image,
            gitUrl,
            previewUrl,
            techStack: Array.isArray(techStack) ? techStack : techStack.split(","),
        });

        const savedProject = await newProject.save();

        return new Response(
            JSON.stringify({ message: "Project added successfully", data: savedProject }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error inserting project:", error);
        return new Response(
            JSON.stringify({ error: "Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}



