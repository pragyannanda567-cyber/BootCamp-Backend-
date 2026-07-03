import express from 'express';
import connectDB from './Database/Mongodb.js';
import router from './Routes/route.js';

const app = express()

app.use(express.json())
app.use(router)

const port = 4000

connectDB()

app.listen(port,()=>{
    console.log('Server has started on Port :',port)
})

