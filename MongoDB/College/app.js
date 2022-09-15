// Embeded the address array on user collection

const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost:27017/Task")
.then(()=>console.log("Connection successful..."))
.catch((err)=>console.log(err));

const studentSchema = new mongoose.Schema({
        name :{
            type : String,
            required : true
        },
        dob :{
            type : Date,
            required : true,
        },
        age :{
            type : Number,
            required :true
        },
        email :{
            type : String,
            required : true
        },
        phone_no :{
            type : Number,
            required : true
        },
        address :{
            type: [{
            state :{
                type : String,
                required : true
            },
            city :{
                type : String,
                required : true
            },
            
        }],
        validate:[arrayLimit,'exceeds the limit of 5']
    },
        createdAt: {
            type : Date,
            default: Date.now
        }
       
    });
    function arrayLimit(val) {
        return val.length <= 5;
      }
      
    const Student = new mongoose.model("Student", studentSchema)
    // To insert the document
    const createDocument = async()=>{
        try{
            const result = await Student.create({
                name: "Sameeksha",
                dob: 2000-06-25,
                age: 21,
                email: "sameeksha@gmail.com",
                phone_no: 8861211185,
                address:[{
                    state: "Tamilnadu",
                    city: "Chennai"
                }]
            })
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
    // createDocument()

    // To add address in the document

    const addAddress = async()=>{
        try{
            const result = await Student.updateOne({ _id: "63219a688a8965d529ccfed4" }, { $push: { address: {state: "Karnataka",city:"Hosnagara"}} })
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }

    // addAddress()

    // To delete the address

    const deleteAddress = async()=>{
        try{
            const result = await Student.updateOne({ _id: "63219a688a8965d529ccfed4" }, { $pull: { address: {state: "Kerala",city:"Wayanad"}} })
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }

    // deleteAddress()

    // To update the address in the array of objects

    const updateAddress = async()=>{
        try{
            const result = await  Student.updateOne({'address._id': '63219a688a8965d529ccfed5'}, {'$set': {'address.$.city': 'Shimoga'}})
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }

    // updateAddress()
