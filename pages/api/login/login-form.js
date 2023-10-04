import connectDB from "@/utils/connectDB"
import User from '../../../model/userReg'
import bcrypt from 'bcrypt'
async function handler(req,res){
    try {
        connectDB()
        if(req.method==='POST'){
            const{email,password,role} = req.body
            console.log({email,password,role})
            const founduser = await User.findOne({email:email})
            console.log(founduser)
         const user =   await bcrypt.compare(password,founduser.password)
         if(user){
            res.status(200).json({message:'login successfully'})
         }else{
            res.status(403).json({message:'forbidden'})
         }

        }
    } catch (error) {
        console.log(error)
    }
    
}

export default handler