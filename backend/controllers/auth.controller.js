import User from "../models/user.model.js";

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
        // Add your password hashing logic here

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({  //201 means created successfully
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
        
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