import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const userSchema = new Schema({
    email:{
        type:String,
        require: true,
        toLowerCase: true,
        unique:true,
        minLength:[13,'Email too short']
    },
   
    password:{
        type:String,
        require: true,
        
    },
    country:{
        type:String,
        require: true,
    },
    city:{
        type:String,
        require: true,
    },
    phone:{
        type:String,
        require: true,
    },
    role:{
        type:String,
        require: true,
    },
    active:{
        type:Boolean,
        require: true,
    },
    
   
})

module.exports = models.User || mongoose.model('User', userSchema)