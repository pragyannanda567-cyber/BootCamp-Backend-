import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true
    }
})
const User = mongoose.model('NoteSystem',userSchema)

export default User