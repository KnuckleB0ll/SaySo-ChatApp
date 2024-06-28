import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.port || 5000;

app.get("/", (req, res) => {s
    res.send("Hello World");
});

app.use("/api/auth",authRoutes);                                                                        
// app.use("/api/messages",messageRoutes);                                                                        
// app.use("/api/users",userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));