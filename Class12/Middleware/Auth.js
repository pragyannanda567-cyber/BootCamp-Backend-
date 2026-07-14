import jsonwebtoken from 'jsonwebtoken'
import User from '../Models/User.js'

const auth = async(req , res, next)=>{
    try {
        
        // let token = req.body.token 

        let token = req.headers.authorization?.split(' ')[1]

        if(!token){
            return res.json({
                message:'user is not login ....'
            })
        }

        let payload = await jsonwebtoken.verify(token, 'studentKey')

        console.log(payload.userid)

        req.userid = payload.userid
    
        next()
    } catch (error) {
        console.log(error) 
    }
}


 


export { auth  }