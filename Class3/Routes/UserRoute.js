import express from 'express';
import { getUser } from '../Controller/UserLogic.js';

const route = express.Router()

route.get('/getuser',getUser)

export default route