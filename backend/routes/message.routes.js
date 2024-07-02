import express from "express";
import { sendMessage, getMessages} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id",protectRoute, sendMessage); //protectRoute for authorization
 

export default router;