import express from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controller/userLogic.js'

const router = express.Router()


  router.post('/createuser', createUser)

  router.get('/getuser',  getUser)

  router.put('/updateuser/:userid', updateUser)

  router.delete('/deleteuser/:userid', deleteUser)

export default router
 
 