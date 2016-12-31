/**
 * Created by Ashutosh on 12/7/16.
 */
var database = require('mongodb');
var mongo = database.MongoClient;

var db_url = 'mongodb://localhost:27017/w3dev';
function insertdata(o) {
    mongo.connect(db_url, function (err, db) {
        if (err) {
            console.log("We got an Error");
        }
        else {
            console.log("Connection Established");
            var collection = db.collection('w3dev-data');
            collection.insert([o], function (err, result) {
                if (err) {
                    console.log("Error");
                }
                else {
                    console.log("Inserted Successfully");
                }
            });
            db.close();
        }
    });
}

module.exports = insertdata;
