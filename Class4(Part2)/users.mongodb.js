use("users")

//Create Operation
/* db.employees.insertOne({
    name:'Alex',
    age:'20',
    salary:'12345',
    email:'alex@gmail.com'

})
 */


/* db.employees.insertMany(
    [
        {
            name:"Joy",
            age:21,
            salary:'50256'
        },
        {
            name:"Victor",
            age:17,
            salary:'90256'
        },
        {
            name:"Tom",
            age:18,
            salary:'6750256'
        },
    ]
)
 */

//Read Operation
/* db.emplyees.findOne({_id:'6a462c3875e89985a20e2362'})*/


//Update Operations
/* db.employees.updateOne({name:'Alex'},{$set:{salary:1234567890}})*/

/* db.employees.updateMany({age:21},{$set:{email:'someone@gmail.com'}}) */

//Delete Operations
/* db.employees.deleteOne({name:'Victor'})*/

/* db.employees.deleteMany({name:'Victor'}) */

/* db.employees.deleteMany({name:'Joy'}) */

/* db.employees.deleteMany({name:'Tom'}) */