/* const http = require('http')*/

import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('<h1>Welcome to Backend Server</h1>')
    }

})
const port = 3000

server.listen(port,()=>{
    console.log('server is listen in port',port)
})