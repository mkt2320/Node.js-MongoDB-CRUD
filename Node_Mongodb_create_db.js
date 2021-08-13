var MongoClient = require('mongodb').MongoClient; //start by creating a MongoClient object
var url = " mongodb://127.0.0.1:27017/firstdb"; //then specify a connection URL with the correct ip address and the name of the database you want to create

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });
