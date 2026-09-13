import jwt from 'jsonwebtoken'
import user from '../model/user.js'

const authMiddle=async(req,res,next)=>{
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token=req.headers.authorization.split(" ")[1]
        }
        if(!token){
            return res.status(404).json({
                success:false,
                message:"token not found"
            })
        }
        const decode= await jwt.verify(token,process.env.SECRETKEY)
        const userData= await user.findById(decode.id).select("-password")
        if(!userData){
            return res.status(404).json({
                message:"user not found"
            })
        }
        req.user=userData
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export default authMiddle