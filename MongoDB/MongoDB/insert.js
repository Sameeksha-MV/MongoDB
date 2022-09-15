var {MongoClient} = require('mongodb')
var url = "mongodb://localhost:27017/";

// Insert only one data

// MongoClient.connect(url, (err, db)=>{
//     if (err) throw err;
//     var dbo = db.db("mydb")
//     var myobj = { name : "Sushan M V", usn : "4mk18cv085", phone_no :"4558216796", hobbies : ["Movies", "Internet surfing"]}
//     dbo.collection("students").insertOne(myobj, function(err, res){
//         console.log("Document inserted")
//         db.close();
//     });
// });

// Insert many datas

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbo = db.db("mydb")
    var myobj =[
        { name : "Sameeksha", usn : "4mk18cs015", age: 15, phone_no : "7894561230", hobbies : ["Reading books", "Cooking"]},
        { name : "Medini", usn : "4mk18cs010", age: 15, phone_no : "7893656120", hobbies : ["Photography", "Bike riding"]},
        { name : "Apoorva", usn : "4mk18cs001", age: 15, phone_no : "7894554554", hobbies : ["Movies", "Reels"]},
    ]       
    dbo.collection("customer").insertMany(myobj, function(err, res){
        console.log(" No. of documents inserted " + res.insertedCount)
        db.close();
    });
});


 
dbo.collection("cu")