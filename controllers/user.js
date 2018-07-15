function User(){
	const jwt = require('jsonwebtoken');
	const crypto = require('crypto');
	const _ = require('lodash');
	const mongoDB = require('mongodb');
	/**
	 * hash password with sha512.
	 * @function
	 * @param {string} password - List of required fields.
	 * @param {string} salt - Data to be validated.
	 */
	function sha512(password, salt){
	    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
	    hash.update(password);
	    var value = hash.digest('hex');
	    return {
	        salt:salt,
	        passwordHash:value
	    };
	};

	/**
	 * generates random string of characters i.e salt
	 * @function
	 * @param {number} length - Length of the random string.
	 */
	function genRandomString(length){
	    return crypto.randomBytes(Math.ceil(length/2))
	    .toString('hex') /** convert to hexadecimal format */
	    .slice(0,length);   /** return required number of characters */
	};

	function saltHashPassword(userpassword) {
	    var salt = genRandomString(16); /** Gives us salt of length 16 */
	    return sha512(userpassword, salt);
	}

	return {
		login(req, res){
			const bodyParams = req.body;
			if(bodyParams.username=='admin' && bodyParams.password=='password'){

				let token = jwt.sign(bodyParams, process.env.secret, {
		          expiresIn: 60 * 60 // expires in 24 hours
		        });
		        res.send({
		        	token 
		        })
			}else
				return res.send("Invalid auth");
		},
		addUser(req, res){
			let userData = req.body;
			const self = this;
			console.log("Inserting as users");
			req.collectionInstance
				.insertOne({
				    "username" : userData.username,
				    "email_id" : userData.email_id,
				    "phno" 		: userData.phno,
				    //Save password using some salt
				    "password" : saltHashPassword(userData.password),
				    "created_at" : new Date(),
				    "updated_at" : new Date(),
				    "status" : true
				}, (err, result)=>{
				    if (err) throw err;
				    
				    req.mongoClient.close();
				    res.send({
						message : `New User added successfully`
					})
			  });
		},
		updateUser(req, res){
			const userId 	= req.params.user_id;
			const newUserData 	= req.body;
			
			let createUpdatedDatum = {};

			if(newUserData.username){
				createUpdatedDatum.username = newUserData.username;	
			}

			if(newUserData.email_id){
				createUpdatedDatum.email_id = newUserData.email_id; 	
			}

			if(newUserData.phno)
				createUpdatedDatum.phno = newUserData.phno; 

			if(!!newUserData.status.toString()){
				createUpdatedDatum.status = newUserData.status;	
			}

			if(_.isEmpty(createUpdatedDatum)){
				req.mongoClient.close();
				res.status(422);
				res.send({
					message : "Requested data is invalid"
				})
				return;
			}

			createUpdatedDatum.updated_at = new Date();  
			req.collectionInstance.updateOne({ _id : mongoDB.ObjectID(userId) }
			, { $set: createUpdatedDatum }, function(err, result) {
				if (err) throw err;
					req.mongoClient.close();

				return res.send({
					message : `${result.result.nModified} records(s) updated`
				})
			});
			
		}
	}
}

module.exports = User();

