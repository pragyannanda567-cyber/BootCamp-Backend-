import express from 'express'
import route from './Routes/UserRoute.js'

const app=express()

const port = 4000

app.get('/',(req,res)=>{
    res.send("<h1>Welocme to backend..</h1>")
})

app.listen(port,()=>{
    console.log('Server is running in port',port)
})