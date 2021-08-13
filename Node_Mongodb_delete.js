var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");
//------------------------------ Delete Document ------------------------------
  var myquery = { address: 'Highway 37' };
  dbo.collection("intern").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
 

/* ------------------------------ Delete Many ------------------------------
    var myquery = { address: /^H/ };
    dbo.collection("intern").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(" document(s) deleted");  
 */  
    db.close();
  });
}); 