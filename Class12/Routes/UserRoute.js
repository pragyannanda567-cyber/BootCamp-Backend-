import express from 'express'
import { login, signup } from '../Controller/UserLogic.js'
import { getuser } from '../Controller/StudentLogic.js'
import { auth } from '../Middleware/Auth.js'

const router = express.Router()



router.post('/signup', signup)

router.post('/login', login)
router.get('/getuser', auth , getuser )
export default router