var {MongoClient} = require('mongodb')
var url = "mongodb://localhost:27017/"

// To delete one data

MongoClient.connect(url, (err, db)=>{
    if(err) throw err;
    var dbo = db.db('mydb');
    var query = { _id: "63198473368bed3f1ae66aca"}
    dbo.collection("students").deleteOne(query, (err, res)=>{
        console.log("Deleted Successfully");
        db.close();
    });
});
