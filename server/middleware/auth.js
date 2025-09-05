import User from "../models/User.js";
import jwt from "jsonwebtoken";

// middleware to protect routes
export const protectRoute = async(req, res, next) => {
    try{
        // Get token from Authorization header (Bearer token format)
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({success:false, message:"No token provided"});
        }
        
        const token = authHeader.split(' ')[1]; // Extract token after "Bearer "
        
        if (!token) {
            return res.status(401).json({success:false, message:"No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(404).json({success:false, message:"User not found"});
        }
        
        req.user = user;
        next();
    } catch(error){
        console.log("Auth error:", error.message);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({success:false, message:"Invalid token"});
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({success:false, message:"Token expired"});
        }
        
        res.status(401).json({success:false, message: "Authentication failed"});
    }
}