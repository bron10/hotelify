const _ = require('lodash');

function Booking(){
	const mongoDB = require('mongodb');
	this.MongoClient = mongoDB.MongoClient;	

	//console.log("this.MongoClient", mongoDB.ISODate)
	return {
		bookARoom(req, res){
			const bookingData = req.body;
			const roomId = req.params.room_id;
			const userId = req.params.user_id;
			const self = this;
			req.collectionInstance
				.update({
					"user_id" : userId,
				    "room_id" : roomId	
				},{
				    "user_id" : userId,
				    "room_id" : roomId,
				    "booked_from" : new Date(bookingData.booked_from),
				    "booked_to" : new Date(bookingData.booked_to)
				}, { upsert: true }, (err, result)=>{
				    if (err) throw err;
				    
				    req.mongoClient.close();
				    res.send({
						message : `Booked a room successfully`
					})
			  });
		}
	}
}

module.exports = Booking()