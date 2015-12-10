
const MONGO_DB = 'mongodb://localhost:27017/eta'; // eta database

var mongoClient = require('mongodb').MongoClient;

exports.getChannels = function(callback) {
  mongoClient.connect(MONGO_DB, function(err, db) {

    if (err) {
      return callback(err, null);
    }

    var collection = db.collection('channels');
    collection.find().toArray(function(err, results) {

      return callback(err, results);
    });
  });
};

exports.postChannel = function(channel, callback) {
  mongoClient.connect(MONGO_DB, function(err, db) {
    if (err) {
      return callback(err, null);
    }

    var collection = db.collection('channels');
    collection.insertOne(channel, callback);
  });
};

return module.exports
