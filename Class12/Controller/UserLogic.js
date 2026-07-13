import User  from "../models/user.js";
import bcrypt from 'bcrypt'
const signup = async(req, res)=>{
    try {
        let {name, email, password, role} = req.body

        if(!name || !email || !password || !role){
            return res.status(404).json({
                message:'data not found for user creation....',
                success:false
            })
        }

           let existingUser = await  User.findOne({email})

           if(existingUser){
                return res.status(409).json({
                    message:'user already exist with this email id ....',
                    success:false,

                })
           }

           let hashpassword;

           try {
                hashpassword = await bcrypt.hash(password, 10)
           } catch (error) {
                return res.status(400).json({
                    success:false,
                    message:'did not hashed password....'
                })

           }

          let user = await  User.create({name, email, role, password: hashpassword})

          res.status(200).json({
            success:true,
            message:'user created successfully....',
            user
          })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'internal server error',error
        })
    }
}



export {signup}


