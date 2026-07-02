import express from 'express';
import { createUser, getUser, updateUser } from '../Controller/UserLogic.js';

const route = express.Router()

route.get('/getuser',getUser)
route.post('/createUser',createUser)
route.put('/updateUser',updateUser)
route.delete('/deleteUser',deleteUser)


export default route