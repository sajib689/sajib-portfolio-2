import mongoose from "mongoose";

const uri = "mongodb+srv://bddoctor:bddoctor@cluster0.2m0rny5.mongodb.net/portfolio";

const ConnectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ Already connected to MongoDB");
      return;
    }

    await mongoose.connect(uri, {
      dbName: "portfolio", // Ensure correct database name
    });

    console.log("🚀 Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default ConnectDb;
