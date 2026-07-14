import express from 'express'
import { login, signup } from '../Controller/UserLogic.js'
import { getteacher,getuser } from '../Controller/StudentLogic.js'
import { auth,checkTeacherRole } from '../Middleware/Auth.js'

const router = express.Router()



router.post('/signup', signup)

router.post('/login', login)
router.get('/getuser', auth , getuser )

router.get('/getteacher' ,auth,  checkTeacherRole, getteacher )
export default router