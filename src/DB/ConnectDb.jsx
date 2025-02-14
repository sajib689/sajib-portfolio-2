import { MongoClient } from "mongodb";

const uri = "mongodb+srv://bddoctor:bddoctor@cluster0.2m0rny5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectionDb = async () => {
    try {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log("MongoDB connected successfully!");

        return client; 
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectionDb;
