var {MongoClient} = require('mongodb')
var url = "mongodb://localhost:27017/"

// To find one data

// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection("students").findOne({}, (err, res)=>{
//         console.log(res.name);
//         db.close();
//     });
// });

// To find all the data

// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection("students").find({}).toArray((err, res)=>{
//         console.log(res);
//         db.close();
//     });
// });


// To find some data

// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection("students").find({}, { projection: {_id: 0, name: 1, usn: 0}}).toArray((err, res)=>{
//         console.log(res);
//         // console.log(res[0].name); // Display the name using index
//         db.close();
//     });
// });

// Filter the result : To find data using query 

// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     var query = { usn: "4mk18cv085"}
//     dbo.collection("students").find(query).toArray((err, res)=>{
//         console.log(res);
//         db.close();
//     });
// });


// Find documents where the name starts with the letter "S" using regular expressions

// MongoClient.connect(url, (err, db)=>{
//         if(err) throw err;
//         var dbo = db.db('mydb');
//         var query = { name: /^Sameeksha/ }
//         dbo.collection("students").find(query).toArray((err, res)=>{
//             console.log(res);
//             db.close();
//         });
//     });
    
// Sort the result alphabetically by name

// MongoClient.connect(url, (err, db)=>{
//     if(err) throw err;
//     var dbo = db.db('mydb');
//     var mysort = { name: 1} 
//     // var mysort = { name: -1}   // To sort the result reverse alphabetically by name
//     dbo.collection("students").find().sort(mysort).toArray((err, res)=>{
//         if(err) throw err;
//         console.log(res);
//         db.close();
//     });
// });
