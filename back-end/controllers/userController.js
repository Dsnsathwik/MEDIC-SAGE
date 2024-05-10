import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken"; // Import jwt library

// Login user
export const loginUser = async (req, res) => {
    // Logic for login
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User Doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token = createToken(user._id);
        return res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
};

// Create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET); // Use jwt.sign with process.env.JWT_SECRET
}

// Register user
export const registerUser = async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    try {
        // Check if user with given email already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password (min 8 characters)" });
        }

        // Confirm password
        if (password !== cpassword) {
            return res.json({ success: false, message: "Passwords do not match" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = userModel({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone
        });

        // Save the new user to the database
        await newUser.save();

        // Create JWT token for the new user
        const token = createToken(newUser._id); // Generate token using new user's ID

        return res.json({ success: true, message: "User registered successfully", token });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
