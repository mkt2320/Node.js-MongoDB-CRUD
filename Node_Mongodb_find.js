var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");

/* ------------------------------- findOne() --------------------------------------
// The findOne() method returns the first occurrence in the selection.
// The first parameter of the findOne() method is a query object.
// we use an empty query object to select all documents in a collection (but returns only the first document).

  dbo.collection("intern").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    //console.log(result.name);
    //console.log(result.address);
*/

// ------------------------------- find all --------------------------------------
// The find() method returns all occurrences in the selection.
// The first parameter of the find() method is a query object. 
// In this example we use an empty query object, which selects all documents in the collection.

dbo.collection("intern").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);


/* ------------------------------- find some --------------------------------------
// The second parameter of the find() method is the projection object that describes which fields to include in the result.

 dbo.collection("intern").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
*/



    db.close();
  });
}); 