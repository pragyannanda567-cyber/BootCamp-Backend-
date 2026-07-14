let users = ['ankit', 'rahul', 'priya']



    const getuser = async (req, res) => {
        try {
            let userid = req.userid
            console.log('getuser ',userid)
            res.send(users)
        } catch (error) {
            res.json({
                message:'failed to get data'
            })
        }
    }

    const getteacher = async(req,res)=>{
        try {

            let teacher = ['Rajesh', 'Nandan', 'Pankaj']


            res.send(teacher)
        
    } catch (error) {
        
    }
}

export { getuser , getteacher}