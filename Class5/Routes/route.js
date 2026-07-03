import express from 'express';
import { createUser } from '../Controller/UserLogic.js';


const router = express.Router()

router.post('/create',createUser)

export default router