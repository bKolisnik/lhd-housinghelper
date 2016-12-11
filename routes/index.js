var express = require('express')
  , router = express.Router()
  , dbService = require('../services/dbService');
  

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Express' });
});

router.get('/details/:id', function(req, res) {
  var id = req.params["id"];
  // do stuff
  res.render('details', { title: "Details" });
});

router.get('/getHouseList', function(req, res, next) {
  dbService.getHouseList(function(err, houseList) {
  	if (err) {
  		res.sendStatus(500);
  	}
  	else
  	{
  		res.json(houseList);
  	}
  });  
	
});

router.get('/populate',function(req, res, next){

	dbService.populateDatabase();
	res.json({status: "Populated the db"});

});

//Asynchronous insert so many inserts can be done simultaneously
router.post('/insertListing',function(req,res,next){
	
	var title = req.body.title;
	var thumbnail = req.body.thumbnail;
	//To do :create JSON object from request data

	var data = {
		title: "The new listing",
        thumbnail: "images/img5.JPG",
        images: ["images/img52.JPG","images/img53.JPG","images/img54.JPG"],
        shortDescription: "Beautiful, Extremely clean room in Bayridge , Lincoln Dr.ive/Bayridge Drive Furnished room/non furnished, all hardwood, no carpet, all inclusive including internet.Washer /Dryer, near Bus stop.…",
        
    };

	dbService.insertListing(data,function(err){
	if (err){
		res.sendStatus(500);
	} else{

	res.json({status:"Inserted new listing"});
	}

	});
	

});

router.get('/removeDatabase',function(req,res,next){


dbService.removeAllListings(function(err){
		if (err){
			res.sendStatus(500);
		}
		else{
		res.json({status:"Dropped database"});
		}
	});

});




//Major to do's insert data feature, user login to post data? search parameter effect query (clientside)

module.exports = router;
