import connectionDb from "@/DB/ConnectDb";


export default async function projectAddHandler(req, res) {
    try {
        const client = await connectionDb;
        const db = client.db("portfolio");
        const projects = req.body
        const data = await db.collection("projects").inertOne(projects)
        res.send(data);
    } catch (error) {
        res.status(500).json({ error: "Database connection failed" });
    }
}
