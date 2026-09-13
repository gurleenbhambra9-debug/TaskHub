import jwt from 'jsonwebtoken'

function generateToken(id){
    return jwt.sign(
        {
            id
        },
        process.env.SECRETKEY,
        {
            expiresIn:"7d"
        }
    )
}
export default generateToken;