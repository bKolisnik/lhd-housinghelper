// Help Node out by setting up define.
if (typeof exports === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    factory(require, exports, module);
  };
}

define(function (require, exports, module) {

});

var faker = require('faker');
var MongoClient = require('mongodb').MongoClient;
var MONGOURL = 'mongodb://localhost:27017/db';
var listingModel = require('../services/models/listing');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost:27017/db');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){

console.log("Connected");
});


/*MongoClient.connect('mongodb://localhost:27017/db', function(err,database){
    if(err) {
      console.log("Couldn't connect to the DB");
      return
    }
    else {
      db = database;
      console.log("Connected to the database");
    }
});*/

function populateDatabase(){

  if(!db){
    console.log("No db");
    return;
  }


//In mongoose each schema maps to a collection

//var collection = db.collection('houses');
var data1 = new listingModel({
        title: "64 Wolfe Street",
        thumbnail: "images/img1.JPG",
        images: ["images/img12.JPG","images/img13.JPG","images/img14.JPG"],
        shortDescription: "January, May, or September lease start: Seeking quiet studious female students (no partying in the home) for large cute and feminine bedrooms",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      });
var data2 = new listingModel({
         title: "Fully Renovated 3 Bedroom House in the vicinity of McBurney Park",
        thumbnail: "images/img2.JPG" ,
        images: ["images/img22.JPG","images/img23.JPG","images/img24.JPG"],
        shortDescription: "Room for rent to a student or full time worker. Room is furnished, close to rennadale plaza, 5min to st.lawrance and 10min to queens and downtown. Internet included! Move in ready! No smoking, no…",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      });
var data3 = new listingModel({
        title: "Tanner Drive - 3 Bedroom Townhome for Rent",
        thumbnail: "images/img3.JPG",
        images: ["images/img32.JPG","images/img33.JPG","images/img34.JPG"],
        shortDescription: "AVAILABLE JAN 1/17 - Room rental available in a 5 bedroom home! Located on a quiet street near St. Lawrence College and Queens University, West Campus, and walking distance to main Kingston Transit…",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      });
var data4 = new listingModel({
        title: "ATTN Students - Close to Queens - Available May 1st - 27 Main St",
        thumbnail: "images/img4.JPG",
        images: ["images/img42.JPG","images/img43.JPG","images/img44.JPG"],
        shortDescription: "Beautiful room in a large 4 bedroom house all utilities included available immediately Bayridge area $500",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 + (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      });
var data5 = new listingModel({
        title: "4-Bedroom House Steps From Campus (for winter term or May 2017)",
        thumbnail: "images/img5.JPG",
        images: ["images/img52.JPG","images/img53.JPG","images/img54.JPG"],
        shortDescription: "Beautiful, Extremely clean room in Bayridge , Lincoln Dr.ive/Bayridge Drive Furnished room/non furnished, all hardwood, no carpet, all inclusive including internet.Washer /Dryer, near Bus stop.…",
        longDescription: faker.lorem.words(),
        price: faker.finance.amount(),
        priceInterval: faker.lorem.words(),
        leaseType: faker.lorem.words(),
        landLordName: faker.name.findName(),
        latitude: String(44.228646 - (Math.random()*0.0005)),
        longitude: String(-76.502897 + (Math.random()*0.0005)),
        laundry: faker.lorem.words(),
        includedUtilities: [faker.lorem.words(),faker.lorem.words()],
        isFurnished: faker.lorem.words(),
        numBedrooms: faker.random.number(),
        numBathrooms: faker.random.number(),
        hasCarParking: faker.lorem.words(),
        hasBikeParking: faker.lorem.words(),
        hasInternetIncluded: faker.lorem.words()
      });

      data1.save(function(err){
        if (err) throw err;

        console.log("Listing saved successfully");

      });

      data2.save(function(err){
        if (err) throw err;

        console.log("Listing saved successfully");

      });

      data3.save(function(err){
        if (err) throw err;

        console.log("Listing saved successfully");

      });

      data4.save(function(err){
        if (err) throw err;

        console.log("Listing saved successfully");

      });

      data5.save(function(err){
        if (err) throw err;

        console.log("Listing saved successfully");

      });
      

}





/*function getHouseList(callback) {
  db.collection('houses').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to fetch house list in dbService");
      callback(err, null);
      return;
    }

    callback(null, docs);
  });
}*/

function getHouseList(callback){
listingModel.find({},function(err,docs){
  if (err){
    console.log("Failed to fetch house list in dbService");
    callback(err, null);
    return;
  }

  callback(null,docs);
  });
}

function getSingleListing(id,callback){
  listingModel.findById(id).toArray(function(err,docs){
  if (err){
    console.log("Failed to fetch a single listing in dbService");
    callback(err, null);
    return;
  }

  callback(null,docs);
  });
}


//Data needs to be a JSON object
function insertListing(data,callback){
  data = new listingModel();
  data.save(function(err){
        if (err) {
          callback(err);
          return;
        }

        console.log("Listing saved successfully");
        callback(null);
      });

}

function removeSingleListing(id,callback){
listingModel.findByIdAndRemove(id,function(err){
  if (err){
    console.log("Failed to fetch a single listing in dbService");
    callback(err, null);
    return;
  }

  callback(null);
  });

}

function removeAllListings(callback){
  mongoose.connection.db.dropDatabase(function(err){
    if (err){
    console.log("Failed to delete database");
    callback(err);
    return;
}
  
  callback(null);

  });
}


  module.exports = {
    getHouseList: getHouseList,
    populateDatabase: populateDatabase,
    removeAllListings: removeAllListings,
    insertListing: insertListing


  };



