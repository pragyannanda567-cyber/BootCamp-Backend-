import employee from "../Database/data.js";

const getUser = (req,res)=>{
    try {
        res.status(200).json({
            success:true,
            message:'Data Fetched Successfully...',
            data:employee
        })


    } 
    catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to get Data',error
        })
        
    }
}

export {getUser}