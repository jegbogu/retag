import connectDB from "@/utils/connectDB";
import User from '../../../model/userReg'
import bcrypt from 'bcrypt'
async function handler(req,res){
    try {
        connectDB()
        if(req.method === 'POST'){
            const{email,password,city,country,phone} = req.body
           
            if(password.length<8){
                res.status(403).json({message:"Password is too short"})
                return;
            }else{
                console.log({email,password,city,country,phone})
                const foundUser = await User.findOne({email:email})
                if(foundUser){
                    res.status(403).json({message:"User Already exist"})
                    return;
                }else{
                    const hashedPassword = await bcrypt.hash(password,12)
                    const doc = new User({
                        email:email,
                        password:hashedPassword,
                        city:city,
                        country:country,
                        phone:phone,
                        role:'User',
                        active: true
                    })
                    await doc.save()
                    res.status(200).json({message:"User registered"})
                }
                
            }
    
            
        }
        
    } catch (error) {
        console.log(error)
    }
   
 
}

export default handler