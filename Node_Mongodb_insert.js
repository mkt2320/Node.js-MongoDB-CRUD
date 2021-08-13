var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");

  //  object
var internobj = { 
      name: "Miti Tamakuwala", 
      address: "Highway 37" 
    };
 /* 
    var internobj1 = { 
        name: "Renuka Annachhatre", 
        address: "Apte Road" 
      };
*/

// The insertOne() method is an object containing the name(s) and value(s) of each field in the document you want to insert.
  dbo.collection("intern").insertOne(internobj, function(err, res) {        
    if (err) throw err;

/*    dbo.collection("intern").insertOne(internobj1, function(err, res) {        
        if (err) throw err;
*/
    console.log("1 document inserted");
    db.close();
  });
}); 