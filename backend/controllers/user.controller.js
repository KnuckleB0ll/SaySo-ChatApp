import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); //find every user except the logged in user
        res.status(200).json(filteredUsers);


    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error in getUsersForSidebar controller: ", error.message);
    }
}