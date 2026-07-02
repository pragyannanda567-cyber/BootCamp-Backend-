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

const createUser =(req,res)=>{
    const {name,email,empID}=req.body;
    if(!name || !email || !empID){
        res.json({
            success:false,
            message:'Name,Email,empID missing'
        })
    }
    employee.push({name,email,empID})

    res.json({
        success:true,
        message:"User Created succesfully..."
    })

}

const updateUser = (req,res)=>{
    const{empID,name}=req.body;
    if(!empID || !name){
        res.status(400).json({
            success:false,
            message:'empID & Name are required'
        })
    }
    let user = employee.find((value)=>value.empID===empID)
    if(!user){
        res.json({
            success:false,
            message:'User Not found'

        })
    }
    user.name=name;
    res.json({
        success:true,
        messgae:'Data Updated Successfully',
        data:employee
    })
}

const deleteUser = (req,res)=>{
    if(!empID){
        res.status(400).json({
            success:false,
            message:"empID needed"
        })
    }
    employee=employee.filter((value)=>value.empID=empID);
    res.json({
        success:true,
        message:'User deleted Successfully'
    })
}   

export {getUser,createUser,updateUser,deleteUser}