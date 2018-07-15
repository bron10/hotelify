const _ = require('lodash');

function Hotels(){
	const mongoDB = require('mongodb');
	this.MongoClient = mongoDB.MongoClient;	

	//console.log("this.MongoClient", mongoDB.ISODate)
	return {
		getAllHotels(req, res){
			const self = this;
				
			req.collectionInstance.find({})
			.toArray((err, docs)=>{
				req.mongoClient.close();
				res.send({data : docs});
			})
		},
		updateHotel(req, res){
			const hotelId 	= req.params.hotel_id;
			const newHotelData 	= req.body;
			
			let createUpdatedDatum = {};

			if(newHotelData.name){
				createUpdatedDatum.name = newHotelData.name;	
			}

			if(newHotelData.address){
				createUpdatedDatum.address = newHotelData.address; 	
			}

			if(newHotelData.phno)
				createUpdatedDatum.phno = newHotelData.phno;

			if(newHotelData.status)
				createUpdatedDatum.status = newHotelData.status; 

			if(_.isEmpty(createUpdatedDatum)){
				req.mongoClient.close();
				res.status(422);
				res.send({
					message : "Requested data is invalid"
				})
				return;
			}

			createUpdatedDatum.updated_at = new Date();  
			req.collectionInstance.updateOne({ _id : mongoDB.ObjectID(hotelId) }
			, { $set:  createUpdatedDatum}, function(err, result) {
				if (err) throw err;
					req.mongoClient.close();

				return res.send({
					message : `${result.result.nModified} record(s) updated`
				})
			});
			
		},
		insertNewHotel(req, res){
			console.log("Inserting as hotel");
			let newHotelData = req.body;
			const self = this;
			req.collectionInstance
				.insertOne({
				    "name" : newHotelData.name,
				    "address" : newHotelData.address,
				    "phno" : newHotelData.phno,
				    "created_at" : new Date(),
				    "updated_at" : new Date(),
				    "status" : true
				}, (err, result)=>{
				    if (err) throw err;
				    
				    req.mongoClient.close();
				    res.send({
						message : `New hotel added successfully`
					})
			  });
			
		}
	}
}

module.exports = Hotels();

