import User from "../models/user.model.js";
import bcrypyt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

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
            generateTokenAndSetCookie(newUser._id, res);
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

export const login = async(req, res) => {
    try {
        const{username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypyt.compare(password,user?.password || ""); //if user is null then password compared w empty string

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login ",error.message);
        res.status(500).json({error:"Something went wrong"});
    }
};


export const logout = async(req,res)=> {
    try {
        res.clearCookie("jwt","", {maxAge: 0});
        res.status(200).json({message:"Logged out successfully"});
        
    } catch (error) {
        console.log("Error in logout ",error.message);
        res.status(500).json({error:"Something went wrong"});
    }
}