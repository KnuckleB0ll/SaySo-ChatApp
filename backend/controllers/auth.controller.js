import User from "../models/user.model.js";
import bcrypyt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        // HASH PASSWORD
        const salt = await bcrypyt.genSalt(10);
        const hashedPassword = await bcrypyt.hash(password, salt);

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            //generate jwt token
            await newUser.save();

            res.status(201).json({  //201 means created successfully
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else{
            res.status(400).json({ error: "Invalid User Data" })
        }
        
    } catch (error) {
        console.log("Error in signup controller:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

export const login = (req, res) => {
    console.log("LogoutUser");
};


export const logout = (req, res) => {
    console.log("SignupUser");
};