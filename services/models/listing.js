var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var listingSchema = new Schema({
	
	title: String,
        thumbnail: String,
        images: [String,String,String],
        shortDescription: String,
        longDescription: String,
        price: Number,
        priceInterval: String,
        leaseType: String,
        landLordName: String,
        latitude: String,
        longitude: String,
        laundry: String,
        includedUtilities: [String,String],
        isFurnished: String,
        numBedrooms: Number,
        numBathrooms: Number,
        hasCarParking: String,
        hasBikeParking: String,
        hasInternetIncluded: String

    });

var listingModel = mongoose.model("listing",listingSchema);

module.exports = listingModel;





