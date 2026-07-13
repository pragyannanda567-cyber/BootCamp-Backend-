import express from 'express'
import { signup } from '../Controller/UserLogic.js'

const router = express.Router()


router.post('/signup', signup)

export default router