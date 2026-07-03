import User from "../Model/user.js";
const createUser = async(req,res)=>{
    try {
        const {name, email,empID} = req.body

        if(!name || !email || !empID){
            return res.status(404).json({
                message:'data not found'
            })

        }
        //Data Creation ....
        const user = await User.create({name,email,empID})
        console.log(user)
        //Send response to the USER
        res.status(200).json({
            success:true,
            message:'Data Created Successfully...',
            data:user
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Could'nt Create Data",error
        })
        
    }
}

export {createUser}