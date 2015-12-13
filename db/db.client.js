
// var mongo = require("mongodb");
// var MongoClient = mongo.MongoClient;
// var Server = require('mongodb').Server;
// var BSON = mongo.BSONPure;
// var db = null;


var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var BSON = mongo.BSONPure;
// Connection url
var url = 'mongodb://localhost:27017/traider';


// // Connect using MongoClient
// MongoClient.connect(url, function(err, db) {
//    // Use the admin database for the operation
//    var adminDb = db.admin();
//    // List all the available databases
//    adminDb.listDatabases(function(err, dbs) {

//    });
// });

exports.getDbClient = function() {
	return MongoClient
};

// exports.getDbClient = function() {
//     MongoClient.connect(url, function(err, db) {
// 	   // Use the admin database for the operation
// 	   var adminDb = db.admin();
// 	   // List all the available databases
// 	   adminDb.listDatabases(function(err, dbs) {

// 	   });
// 	});
// };

exports.dbName = function() {
    return "traider";
};

exports.dbUrl = function() {
    return url;
};

exports.makeObjectID = function(id) {
    // return new BSON.ObjectID(id);
    return new mongo.ObjectID(id);
};


