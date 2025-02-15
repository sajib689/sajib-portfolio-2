import ConnectDb from "@/DB/ConnectDb";
import ProjectModel from "../ProjectModel";

export async function GET() {
    try {
        await ConnectDb();
        console.log("✅ Connected to DB, fetching projects...");

        const projects = await ProjectModel.find();
        console.log("📌 Projects found:", projects);

        return Response.json({ projects }, { status: 200 });
    } catch (error) {
        console.error("🔥 ERROR:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
