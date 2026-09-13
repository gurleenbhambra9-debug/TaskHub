import user from "../model/user.js";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/jwt.js";

export const registerUser= async(req,res)=>{
    try {
        const {name,email,password}= req.body
        if(!name||!email||!password){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        const existUser= await user.findOne({email})
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"user is already registered"
            })
        }
        const hashpassword= await bcrypt.hash(password, 10)
        const registeredUser= await user.create({
            name,
            email,
            password:hashpassword
        })
        res.status(200).json({
            success:true,
            data:registeredUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


// login user

export const loginUser= async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const existUser= await user.findOne({email})
        if(!existUser){
            res.status(400).json({
                message:"user is not registered"
            })
        }
        const checkPassword= await bcrypt.compare(password, existUser.password)
        if(!checkPassword){
           return res.status(400).json({
                message:"Invalid Password"
            })
        }
        const token= generateToken(existUser._id)
        res.status(200).json({
            success:true,
            token,
            data:existUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}