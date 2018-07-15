//require('./controllers');
const controllers = require('../controllers');

const hotelsController 	= controllers.hotels;
const userController 	= controllers.user;
const roomsController 	= controllers.rooms;
const bookingController = controllers.booking;

const express 		= require('express')
function Routes(){}

Routes.prototype.hotelRoutes = function(){
	/**
	 * Create new router instance for each prototype method
	 */
	const router 		= express.Router();

	/**
	 * @api {get} http://localhost:3000/hotels/all Get All hotel data
	 * @apiName Gethotel
	 * @apiGroup Hotel
	 * @apiSuccessExample {json} Success-Response:
	 *     {
		    "data": [
		        {
		            "_id": "5b483ff639c69d7c43028e92",
		            "name": "king",
		            "address": "US",
		            "phno": 12212121212,
		            "created_at": "2018-07-13T06:00:22.268Z",
		            "updated_at": "2018-07-13T06:00:22.268Z",
		            "status": true
		        }
		    ]
		}
	 */	
	router.get('/all', hotelsController.getAllHotels);

	/**
	 * @api {put} http://localhost:3000/hotels/:hotel_id update the hotel
	 * @apiName updatehotel
	 * @apiGroup Hotel
	 * @apiParam {String} [name]   name of hotel
	 * @apiParam {String} [address]   address of hotel
	 * @apiParam {Number} [phno]   phno of hotel
	 * @apiParam {String} [status]   status will be true by default.
	 * @apiParamExample {json} Request-Example:
	 *     {
			    "name" : "queen",
			    "address" : "CA",
			    "phno" : 3333222222,
			    "status" : false
			}
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *  {
		    "message": "1 record(s) updated"
		}
	 */	
	router.put('/:hotel_id', hotelsController.updateHotel);

	/**
	 * @api {post} http://localhost:3000/hotels/add Add new hotel
	 * @apiName addhotel
	 * @apiGroup Hotel
	 * @apiParam {String} name   name of hotel
	 * @apiParam {String} address  address of hotel
	 * @apiParam {Number} phno   phno of hotel
	 * @apiParam {String} status  status will be true by default.
	 * @apiParamExample {json} Request-Example:
	 *     {
		    "name" : "king",
		    "address" : "US",
		    "phno" : 12212121212,
		    "status" : true
		}
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
		    "data": [
		        {
		            "_id": "5b483ff639c69d7c43028e92",
		            "name": "king",
		            "address": "US",
		            "phno": 12212121212,
		            "created_at": "2018-07-13T06:00:22.268Z",
		            "updated_at": "2018-07-13T06:00:22.268Z",
		            "status": true
		        }
		    ]
		}
	 */
	router.post('/add', hotelsController.insertNewHotel)
	return router;
}

Routes.prototype.roomRoutes = function(){
	/**
	 * Create new router instance for each prototype method
	 */
	const router 		= express.Router();

	/**
	 * @api {post} http://localhost:3000/rooms/:hotel_id/add Add new rooms. 
	 @apiDescription  Below example shows adding two deluxe rooms with respective room number
	 * @apiName addRoom
	 * @apiGroup Room
	 * @apiParam {String} [booked_from]  Mandatory room booked from
	 * @apiParam {String} [booked_to]  Mandatory room booked till
	 * @apiParam {String} [type]  Mandatory type of room
	 * @apiParam {Boolean} [status]  Optional status will be true by default.
	 * @apiParamExample {json} Request-Example:
	 *     {
			    "type": "deluxe",
			    "room_no" : [101,102]
			}
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
			    "message": "New room added successfully"
			}
	 */
	router.post('/:hotel_id/add', roomsController.addRoom)
	
	/**
	 * @api {GET} http://localhost:3000/rooms/:hotel_id/all Get the room data
	 * @apiDescription according to date range for particular hotel 
	 * @apiName getRooms
	 * @apiGroup Room
	 * @apiParam {String} [start_date]  Optional query booked from
	 * @apiParam {String} [end_date]  Optional query booked till
	 * 
	 * @apiParamExample {json} Request-Example:
	 *     ?start_date=2018-07-10T06:00:22.268Z&end_date=2018-07-15T00:00:22.268Z
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
		    "data": [
		        {
		            "_id": "5b4b0c03042b7b139444b12c",
		            "room_no": 102,
		            "type": "deluxe",
		            "hotel_id": "5b483ff639c69d7c43028e92"
		        }
		    ]
		}
	 */
	router.get('/:hotel_id/all', roomsController.getAllRooms)
	return router;
}

Routes.prototype.bookingRoutes = function(){
	/**
	 * Create new router instance for each prototype method
	 */
	const router 		= express.Router();

	/**
	 * @api {post} http://localhost:3000/rooms/:room_id/booked_by/:user_id Book a room by user. if booked by same user update the booking dates
	 * @apiName bookARoom
	 * @apiGroup Booking
	 * @apiParam {String} booked_from  Mandatory room booked from
	 * @apiParam {String} booked_to  Mandatory room booked till
	 * @apiParamExample {json} Request-Example:
	 *     {
			    "booked_from" : "2018-07-10T06:00:22.268Z",
			    "booked_to" : "2018-07-15T06:00:22.268Z"
			}
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
			    "message": "room booked successfully"
			}
	 */
	router.post('/:room_id/booked_by/:user_id', bookingController.bookARoom)
	
	return router;
}


Routes.prototype.userRoutes = function(){
	/**
	 * Create new router instance for each prototype method
	 */
	const router 		= express.Router();

	/**
	 * @api {post} http://localhost:3000/user/add add new user
	 * @apiName newUser
	 * @apiGroup User
	 * @apiParam {String} username  Username
	 * @apiParam {String} email_id  User email id
	 * @apiParam {number} phno  phone Number
	 * @apiParam {String} password  user password
	 * @apiParamExample {json} Request-Example:
	 *     {   
		    "username" : "billy",
		    "email_id" : "bill@example.com",
		    "phno" : 9876543210,
		    "password" : "bill123"
		}
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
			    "message": "New User added successfully"
			}
	 */
	router.post('/add', userController.addUser)

	/**
	 * @api {Put} http://localhost:3000/user/:user_id/update update new user
	 * 
	 *  @apiName updateUser
	 * @apiGroup User
	 * @apiParam {String} [usename]  Username
	 * @apiParam {String} [email_id]  User email id
	 * @apiParam {String} [phno]  Number
	 * @apiParam {Boolean} [status]  set status as `true` or `false` (soft deletion/disabled if false)
	 * @apiParamExample {json} Request-Example:
	 *     {   
		    "username" : "bron",
		    "phno" : 9822222222,
		    "status" : false
		}
	 * 
	 * @apiSuccessExample {json} Success-Response:
	 *     {
			    "message": "1 records(s) updated"
			}
	 */
	router.put('/:user_id/update', userController.updateUser)
	
	return router;
}

module.exports = new Routes();