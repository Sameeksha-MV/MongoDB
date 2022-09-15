var {MongoClient} = require('mongodb')
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, (err, db)=>{
    if(err) throw err;
    var dbo = db.db('mydb');
    var myquery = {phone_no : "7894561230"}
    var newvalue ={$set : {phone_no : "9945713577"}} // When using the $set operator, only the specified fields are updated
    dbo.collection("students").updateOne(myquery, newvalue, (err, res)=>{
        console.log("Document updated");
        db.close();
    });
});
