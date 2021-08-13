var MongoClient = require('mongodb').MongoClient;
var url = " mongodb://127.0.0.1:27017/"; 
const nameDB = "firstdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");
  dbo.createCollection("intern", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${nameDB}`)
    db.close();
  });
}); 