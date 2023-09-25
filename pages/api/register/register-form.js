import connectDB from "@/utils/connectDB";
import User from '../../../model/userReg'
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
                const doc = new User({
                    email:email,
                    password:password,
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
        
    } catch (error) {
        console.log(error)
    }
   
 
}

export default handler