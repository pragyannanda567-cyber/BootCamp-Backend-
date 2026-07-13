import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['Admin', 'Student', 'Teacher']
    }
})

 const User = mongoose.model('User', userSchema)

 export default User
