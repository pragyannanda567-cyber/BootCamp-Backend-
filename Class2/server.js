import express from 'express'


const app = express()

const port = 4000

app.use(express.json())



app.get('/', (req,res)=>{
res.send("<h1>Welcome to Backend...</h1>")
})




app.get('/about', (req,res)=>{
     res.send('<h1>This is About Page</h1>')
})





// let students = [
//     {
//         name:'Ankit',
//         age:27

//     },
//     {
//         name:'Rahul',
//         age:23
//     },
//     {
//         name:'Priya',
//         age:40
//     }
// ]


let students = ['ankit', 'Rahul', 'Priya']

 
/* app.get('/getStudents', (req,res)=>{
    res.json({
        data:students,
        success:true,
        message: 'data fetched successfully'
    })
}) */

//Get Operation 
    app.get('/getuser',(req,res)=>{
        res.json({
            success:true,
            message:'data fetched successfully',
            data:students
        })
    })



  app.post('/createuser', (req,res)=>{
        const{name}=req.body

        students.push(name)

        res.json({
            success:true,
            message:'data created successfully',
            data:students
        })
  }) 


//   console.log(students)


// app.put()  
    app.put('/updateuser',(req,res)=>{
        /* const name=req.body.name
        const newName=req.body.newName */
        const{name,newName}=req.body
        let index = students.indexOf(name);
        students[index]=newName
        res.json({
            success:true,
            message:'User Updated Sucessfully...',
            data:students
        })
    })

// app.delete()
    app.delete('/deleteuser',(req,res)=>{
        const {name}=req.body
        const index = students.indexOf(name)
        students.splice(index,1)

        res.json({
            message:'User Deleted Successfully...',
            success:true,
            data:students

        })
    })



// API 1 'page/job'

// API 2 'page/contact'
 

app.listen(port, ()=>{
    console.log('server is running in port : ', port)
})


