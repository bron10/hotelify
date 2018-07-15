const _ = require('lodash');

function Scientist(){
	const mongoDB = require('mongodb');
	
	return {
		addRoom(req, res){
			let newRoomData = req.body;
			const hotelId	= req.params.hotel_id;
			const self = this;
			const roomCollections = _.map(newRoomData.new_rooms, (room)=>{
				return {
					"room_no" : room,
					"type" : newRoomData.type,
					"hotel_id" : hotelId
				}
			})

			req.collectionInstance
				.insert(roomCollections, (err, result)=>{
					//console.log("err, result", err, result);

				    if (err) throw err;
				    
				    req.mongoClient.close();
				    res.send({
						message : `New room(s) added successfully`
					})
			  });
		},
		getAllRooms(req, res){
			const queryData = req.query;;
			const hotelId 	= req.params.hotel_id;

			let createBookingQuery = {};

			if(queryData.start_date)
				createBookingQuery['booked_from']= {$gte : new Date(queryData.start_date)};

			if(queryData.end_date)
				createBookingQuery['booked_to']= {$lte : new Date(queryData.end_date)};

			//createBookingQuery['status'] = true;			
			
			//Get room ids
			req.collectionInstance.find({hotel_id : hotelId}, {_id : 1})
			.toArray((err, roomData)=>{
				if(_.isEmpty(roomData)){
					return res.send({
						message : "No rooms available"
					})
				}
				//console.log("roomData", roomData, data);
				const roomIds = _.map(roomData, roomDatum=>roomDatum._id);
				createBookingQuery['room_id'] = {
					'$in' : roomIds
				}
				//console.log("createBookingQuery", createBookingQuery);
				//to fetch the mongo query with respect to date range
				req.dbInstance.collection('bookings').find(createBookingQuery, {_id : 1})
				.toArray((err, alreadyBookedRoomsData)=>{
					const alreadyBookedRoomIds = _.map(alreadyBookedRoomsData, roomDatum=>roomDatum.room_id);
					req.mongoClient.close();
					res.send({data : _.filter(roomData, (room)=>{
						return !_.includes(room._id, alreadyBookedRoomIds)
					})});
				})	
			})	
		}
	}
}

module.exports = Scientist();

