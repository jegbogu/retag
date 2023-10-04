import connectDB from "@/utils/connectDB"
import User from '../../../model/userReg'
import bcrypt from 'bcrypt'
async function handler(req,res){
    try {
        connectDB()
        if(req.method==='POST'){
            const{email,password,role} = req.body
            console.log({email,password,role})
            const user = await User.findOne({email:email})
            console.log(user)
         const founduser =   await bcrypt.compare(password,user.password)
         if(founduser){
            res.status(200).json(user)
         }else{
            res.status(403).json({message:'forbidden'})
         }

        }
    } catch (error) {
        console.log(error)
    }
    
}

export default handler