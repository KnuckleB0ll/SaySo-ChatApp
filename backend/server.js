import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.port || 5000;

dotenv.config();

app.use(express.json()); // This is a middleware that allows us to parse incoming requests with JSON payloads

app.use("/api/auth",authRoutes);                                                                        
// app.use("/api/messages",messageRoutes);                                                                        
// app.use("/api/users",userRoutes);


// app.get("/", (req, res) => {
//     res.send("Hello World");
// });



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});