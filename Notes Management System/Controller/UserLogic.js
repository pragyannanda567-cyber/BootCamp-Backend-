import User from "../Models/User.js";
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const signup=async(req,res)=>{
    try {
        let { name, email, password} = req.body

        if (!name || !email || !password ) {
            return res.status(404).json({
                message: 'data not found for user creation....',
                success: false
        })
    }

        let existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(409).json({
                message: 'user already exist with this email id ....',
                success: false,

            })
        }

        let hashpassword;

        try {
            hashpassword = await bcrypt.hash(password, 10)
        }catch (error) {
            return res.status(400).json({
                success: false,
                message: 'could not hashed password....'
            })
        }
        
        let user = await User.create({ name, email, password: hashpassword })

        res.status(200).json({
            success: true,
            message: 'user created successfully....',
            user
        })


    }catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error', error
        })
    }
}
const login = async (req, res) => {
    try {
        const { email, password} = req.body
        if (!email || !password) {
            return res.status(404).json({
                success: false,
                message: 'data not found for login....'
            })
        }

        let user = await User.findOne({email})

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'user not found  by this  email id ...'
            })
        }




        if (await bcrypt.compare(password, user.password)) {

            let token = jsonwebtoken.sign({ userid: user._id }, 'studentKey', { expiresIn: '3d' })


            res.status(200).json({
                success: true,
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                message: "Login successful"
});
        } else {
            return res.status(401).json({
                message: 'invalid password..',
                success: false
            })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'failed to login',error
        })
    }
}


const createNote = async (req,res)=>{

    try{

        const {title,content}=req.body;

        const note = await Note.create({

            title,

            content,

            userId:req.user.userid

        });

        res.status(201).json(note);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

}

const notes = await Note.find({

    userId:req.user.userid

});


const note = await Note.findOneAndUpdate(

    {

        _id:req.params.id,

        userId:req.user.userid

    },

    req.body,

    {

        new:true

    }

);

const note = await Note.findOneAndDelete({

    _id:req.params.id,

    userId:req.user.userid

});






export { signup, login }



