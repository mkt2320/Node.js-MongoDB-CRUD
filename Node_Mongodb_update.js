var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("firstdb");

//------------------------------ Update Document (updateOne() method) -----------------------------
  var myquery = { address: "Highway 37" };
  var newvalues = { $set: {name: "Miti", address: "Shivajinagar" } };
  dbo.collection("intern").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");


 /*------------------------------ Update Only Specific Fields ($set operator) -----------------------------
  var myquery = { address: "Shivajinagar" };
  var newvalues = { $set: { address: "Apte Road" } };
  dbo.collection("intern").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
*/

/* ------------------------------ Update Many Documents (updateMany() method) -----------------------------
  var myquery = { address: /^A/ };
  var newvalues = {$set: {name: "Renuka Annachhatre"} };
  dbo.collection("intern").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(" document(s) updated");   
*/

    db.close();
  });
}); 