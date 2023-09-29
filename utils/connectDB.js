import mongoose from "mongoose";
async function connectDB(){
try {
    console.log('connecting to DB')
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log('DB connected')
} catch (error) {
    console.log(error)
}
}

export default connectDB