import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/DatabaseSecurity')
        console.log('database connected successfully....')


    } catch (error) {
        console.log('failed to connect to database',error)
        process.exit(1)
    }
}

export default connectDb