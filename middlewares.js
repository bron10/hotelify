function middlewares(){
	const MongoClient = require('mongodb').MongoClient;
	
	const jwt = require('jsonwebtoken');
	const url = process.env.dbUrl;	
	const db  = process.env.db;

	//console.log("process.env", process.env);
	return {
		verifyAuth : (req, res, next)=>{
			
			jwt.verify(req.headers.authtoken, process.env.secret, function(err, decoded) {
				if(err){
					res.status(401);
					res.send({
						message : "Authentication failed!"
					})
					return;
				}
				next()
			});
		},
		connectMongo(collection){
			return (req, res, next)=>{
				MongoClient.connect(url, { useNewUrlParser: true }, (err, client)=>{
					if (err){
						throw err;
						res.status(500);
						res.send({
							message : "Something went wrong!"
						})
						return client.close();	
					} 
					req['collectionInstance'] = client.db(db).collection(collection);
					req['mongoClient'] = client;
					req['dbInstance'] = client.db(db);
					//console.log("req['collectionInstance']", req['mongoClient'].close)
					//console.log("req['dbInstance']", req['dbInstance'].close)
					next();	
				})
			}
		}
	}
}

module.exports = middlewares()