const mongoose = require('mongoose')
const { db } = require('./studSchema')
mongoose.connect('mongodb://localhost/student')

const Student = require("./studSchema")



// async function studentCreation(){
//     try{
//         const student = await Student.insertMany([
//             {
//                 name : "Sameeksha",
//                 usn : "4mk18cs015",
//                 dob : 25-06-2000,
//                 age : 22,
//                 email : "sameeksha@gmail.com",
//                 phone_no : 9945713577,
//                 address : 
//                 [{
//                     state : "Karnataka",
//                     city : "Shimoga",
//                     street1 : "Sagar",
//                     pincode : 577401
//                 }]
//             },
//             {
//                 name : "Medini",
//                 usn : "4mk18cs010",
//                 dob : 11-05-2000,
//                 age : 22,
//                 email : "medini@gmail.com",
//                 phone_no : 8546912225,
//                 address : [{
//                     state : "Karnataka",
//                     city : "Mysore",
//                     street1 : "Mandya",
//                     street2 : "Maddur",
//                     pincode : 5774551  
//                 }]
//             },
//             {
//                 name : "Apoorva",
//                 usn : "4mk18cs001",
//                 dob : 22-09-1999,
//                 age : 23,
//                 email : "apoorva@gmail.com",
//                 phone_no : 9955812225,
//                 address : [{
//                     state : "Karnataka",
//                     city : "Kumta",
//                     street1 : "Gokarna",
//                     street2 : "Torke",
//                     pincode : 578546 
//                 }]
//             },
//             {
//                 name : "Sushan",
//                 usn : "4mk18cv001",
//                 dob : 18-08-1998,
//                 age : 24,
//                 email : "sushan@gmail.com",
//                 phone_no : 9955899785,
//                 address : [{
//                     state : "Karnataka",
//                     city : "Shimoga",
//                     street1 : "Sagar",
//                     pincode : 577412 
//                 }]
//             }
//     ])
//     console.log("User inserted !!")
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// studentCreation()

// async function updateAddress(){
//     try{
//         const findStudent = await Student.find({
//             name : "Medini"
//         }).update({
//             address :{
//                 city:"Hosanagar"
//             }
//         }).
//         console.log("Update student")
//     }catch(error){
//         console.log(error.message)
//     }
// }

// updateAddress()

// async function deleteAddress(){
//     try{
//         const deleteStudent = await Student.deleteMany({
//             name : "Sameeksha"
//         })
//         console.log("Deleted the user " + deleteStudent)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// deleteAddress()


// async function or(){
//     try{
//         const student = await Student.find({$or: [{name: 'Sameeksha'},{age: 24}]})
//         console.log(student)
// }catch(error){
//     console.log(error.message)
// }
// }

// or()  // Call the function or() -  According to this, till one of the conditions is true, the document data will get returned. 

// async function and(){
//     try{
//         const student = await Student.find({$and: [{name: 'Sushan'},{age: 25}]})
//         console.log(student)
// }catch(error){
//     console.log(error.message)
// }
// }

// and() // Call the function and() - According to this, both the conditions is true, the document data will get returned. 

// async function age(){
//     try{
//         const student = await Student.find({$and:[{age: {$gt: 22}},{age: {$lt: 24}}]})
//         console.log(student)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// age() // Call the function age()

// async function not(){
//     try{
//         const student = await Student.find( { age: { $not: { $gt: 24} } }  )
//         console.log(student)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// not() // Call the function not()

// async function find(){
//     try{
//         const student = await  Student.where('age').lt(24).limit(2)
//         console.log(student)
//     }catch(error){
//         console.log(error.message)
//     }
// }
// find()

// async function find(){
//     try{
//         const student = await  Student.find({name:{$in: ["Sameeksha", "Sampritha"]}}) // $in - Matches the values specified in an array.  	
//         // const student = await  Student.find({name:{$nin: ["Sameeksha", "Sampritha"]}}) // $nin - Matches none of the values specified in an array.  	
//         console.log(student)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// find()

// async function find(){
//     try{
//         const student = await  Student.find({$search:"Sameeksha"}) // $in - Matches the values specified in an array.  	
//         console.log(student)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// find()