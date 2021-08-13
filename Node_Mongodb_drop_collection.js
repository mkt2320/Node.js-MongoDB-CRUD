var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");


/*-------------------------------- the drop() method -----------------------------
  dbo.collection("intern").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
*/

// -------------------------------- db.dropCollection -----------------------------
    dbo.dropCollection("intern", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");



    db.close();
  });
});