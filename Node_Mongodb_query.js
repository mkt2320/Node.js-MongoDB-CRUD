var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");

  var query = { address: "Apte Road" };
 // var query = { address: /^H/ }; // Regular expression: To find only the documents where the "address" field starts with the letter "S"
  dbo.collection("intern").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    
    
    db.close();
  });
});