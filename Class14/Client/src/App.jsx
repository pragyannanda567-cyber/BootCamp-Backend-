import React, { useEffect } from 'react'
import{io}from "socket.io-client"

const socket = io("http://localhost:3000")


function App() {
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("User Connected:",socket.id)
    })
    socket.on("message",(msg)=>{
      console.log(msg)
    })
    socket.on("sendingtoall",(data)=>{
      console.log(data)
    })
    socket.emit("sendingtoallfrontend","Hello for all (Frontend)")

    socket.on("receive-message",(msg)=>{
      console.log(msg)
    })

  },[])
  return (
    <div>App</div>
  )
}

export default App