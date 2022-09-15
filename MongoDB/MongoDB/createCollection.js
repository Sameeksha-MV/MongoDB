var {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("students", function(err, res) {   // Created the collection
//     // if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customer", function(err, res) {   // Created the collection
      // if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
  
