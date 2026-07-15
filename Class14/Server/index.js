import express from 'express'
import { Server } from 'socket.io';
import {createServer} from "http";

const port = 3000
const app = express();

const server = createServer(app)

const io = new Server(server,{cors:{
    origin:"http://localhost:5173"
}})

io.on("connection",(socket)=>{
    console.log("User Connected:",socket.id)
   /*  socket.emit("message","Hello World")
    socket.emit("message",'<Insert funny message here>') */
   /*    io.emit("sendingtoall","Hello for all")*/
   socket.on("sendingtoallfrontend",(msg)=>{
    io.emit("receive-message",msg)
   })
})

server.listen(port,()=>{
    console.log(`App is running on Port : ${port}`)
})