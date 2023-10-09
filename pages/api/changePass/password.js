import connectDB from "@/utils/connectDB";
import User from '../../../model/userReg'
import bcrypt from 'bcrypt'

async function handler(req,res){
    if(req.method==='POST'){
        try {
            connectDB()
            
            const{enteredEmail, enteredPassword} = req.body
            const user =await User.findOne({email:enteredEmail})
            console.log(user)
            const hashedPassword = await bcrypt.hash(enteredPassword,10)

           const foundUser = await User.findOneAndUpdate({email:enteredEmail}, { $set: { password: hashedPassword }})
           console.log(foundUser)
           res.status(200).json({message:"password updated"})

        } catch (error) {
            console.log(error)
        }
    }
}

export default handler