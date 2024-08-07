import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";

const PORT = process.env.port || 5000;

dotenv.config();

app.use(express.json()); // This is a middleware that allows us to parse incoming requests with JSON payloads
app.use(cookieParser()); // This is a middleware that allows us to parse incoming requests with cookies

app.use("/api/auth",authRoutes);                                                                        
app.use("/api/messages",messageRoutes);                                                                        
app.use("/api/users",userRoutes);                                                                        
// app.use("/api/users",userRoutes);


// app.get("/", (req, res) => {
//     res.send("Hello World");
// });



server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});