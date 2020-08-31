# hotelify
Simple APIs that provide CRUD operation on hotels and room booking. Note that no ORM used (Mongoose)


### Steps
Once downloaded or cloned the project go through following steps.
Prerequisites : mongodb process is running locally.
1.Go to project folder hotelify, where package.json file is at root level. Run `npm install` in terminal  
2. Run 'npm start' 

## using docs
1. Use `sudo npm install apidoc -g` to get api docs npm package globally
2. Skip this step as doc folder is already present.run `apidoc -i routes/` to update the documentation, else go to step 3.
3. Go to `http://localhost:3000/doc`

## Postman collection 
The endpoints are provided as a postman collection.
The postman collection is provided in above repository as filename `hotelify.postman_collection.json` . Import it and Enjoy scripting! 

## TO DO
 - Use Sequelize for data migrations
 - Create services :`db`, `utils`
 - Containerization
  
