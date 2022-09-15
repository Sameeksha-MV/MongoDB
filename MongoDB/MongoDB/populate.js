const { UnorderedBulkOperation } = require('mongodb')
const mongoose = require('mongoose')
const {model , Schema} = require('mongoose')
mongoose.connect('mongodb://localhost/relation')
const app = require('express')()

const DepartmentSchema = new mongoose.Schema({
    name : {
        type : String
    },
    location : {
        type : String
    }
})

const Department = model("department", DepartmentSchema)

const EmployeeSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    mobile : {
        type : Number
    },
    department: {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'department' 
    }
})


app.use("/", async(req, res)=>{     
    await Department.remove({})
    await Department.create({
        name : 'IT Department',
        location : 'Banglore'
    })
    await Department.create({
        name : 'Marketing Department',
        location : 'Pune'
    })
    await Employee.remove({})
    await Employee.create({
        firstname : 'Sameeksha',
        lastName : 'M V',
        mobile : 9945713577,
        department : await Department.findOne({name : 'Marketing Department'})
    })
    await Employee.create({
        firstname : 'Medini',
        lastName : 'K A',
        mobile : 9945754580,
        department : await Department.findOne({name : 'IT Department'})
    })


    res.json({
        departments : await Department.find(),
        employees : await Employee.find(),
        employeesWithDep : await Employee.find().populate("department")
       
    })
})

app.listen(3000, ()=>console.log("Listening on port 3000"))