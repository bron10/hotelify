define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:3000/rooms/:room_id/booked_by/:user_id",
    "title": "Book a room by user. if booked by same user update the booking dates",
    "name": "bookARoom",
    "group": "Booking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "booked_from",
            "description": "<p>Mandatory room booked from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "booked_to",
            "description": "<p>Mandatory room booked till</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t\t    \"booked_from\" : \"2018-07-10T06:00:22.268Z\",\n\t\t\t    \"booked_to\" : \"2018-07-15T06:00:22.268Z\"\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t\t    \"message\": \"room booked successfully\"\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/hotels/all",
    "title": "Get All hotel data",
    "name": "Gethotel",
    "group": "Hotel",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t    \"data\": [\n\t\t        {\n\t\t            \"_id\": \"5b483ff639c69d7c43028e92\",\n\t\t            \"name\": \"king\",\n\t\t            \"address\": \"US\",\n\t\t            \"phno\": 12212121212,\n\t\t            \"created_at\": \"2018-07-13T06:00:22.268Z\",\n\t\t            \"updated_at\": \"2018-07-13T06:00:22.268Z\",\n\t\t            \"status\": true\n\t\t        }\n\t\t    ]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/hotels/add",
    "title": "Add new hotel",
    "name": "addhotel",
    "group": "Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phno",
            "description": "<p>phno of hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status will be true by default.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t    \"name\" : \"king\",\n\t\t    \"address\" : \"US\",\n\t\t    \"phno\" : 12212121212,\n\t\t    \"status\" : true\n\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t    \"data\": [\n\t\t        {\n\t\t            \"_id\": \"5b483ff639c69d7c43028e92\",\n\t\t            \"name\": \"king\",\n\t\t            \"address\": \"US\",\n\t\t            \"phno\": 12212121212,\n\t\t            \"created_at\": \"2018-07-13T06:00:22.268Z\",\n\t\t            \"updated_at\": \"2018-07-13T06:00:22.268Z\",\n\t\t            \"status\": true\n\t\t        }\n\t\t    ]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/hotels/:hotel_id",
    "title": "update the hotel",
    "name": "updatehotel",
    "group": "Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>address of hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "phno",
            "description": "<p>phno of hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>status will be true by default.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t\t    \"name\" : \"queen\",\n\t\t\t    \"address\" : \"CA\",\n\t\t\t    \"phno\" : 3333222222,\n\t\t\t    \"status\" : false\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"message\": \"1 record(s) updated\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/rooms/:hotel_id/add",
    "title": "Add new rooms.",
    "description": "<p>Below example shows adding two deluxe rooms with respective room number</p>",
    "name": "addRoom",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "booked_from",
            "description": "<p>Mandatory room booked from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "booked_to",
            "description": "<p>Mandatory room booked till</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Mandatory type of room</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Optional status will be true by default.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t\t    \"type\": \"deluxe\",\n\t\t\t    \"room_no\" : [101,102]\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t\t    \"message\": \"New room added successfully\"\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Room"
  },
  {
    "type": "GET",
    "url": "http://localhost:3000/rooms/:hotel_id/all",
    "title": "Get the room data",
    "description": "<p>according to date range for particular hotel</p>",
    "name": "getRooms",
    "group": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_date",
            "description": "<p>Optional query booked from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_date",
            "description": "<p>Optional query booked till</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "?start_date=2018-07-10T06:00:22.268Z&end_date=2018-07-15T00:00:22.268Z",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t    \"data\": [\n\t\t        {\n\t\t            \"_id\": \"5b4b0c03042b7b139444b12c\",\n\t\t            \"room_no\": 102,\n\t\t            \"type\": \"deluxe\",\n\t\t            \"hotel_id\": \"5b483ff639c69d7c43028e92\"\n\t\t        }\n\t\t    ]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Room"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/user/add",
    "title": "add new user",
    "name": "newUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>User email id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phno",
            "description": "<p>phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {   \n\t\t    \"username\" : \"billy\",\n\t\t    \"email_id\" : \"bill@example.com\",\n\t\t    \"phno\" : 9876543210,\n\t\t    \"password\" : \"bill123\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t\t    \"message\": \"New User added successfully\"\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "http://localhost:3000/user/:user_id/update",
    "title": "update new user",
    "name": "updateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "usename",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email_id",
            "description": "<p>User email id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phno",
            "description": "<p>Number</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>set status as <code>true</code> or <code>false</code> (soft deletion if false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {   \n\t\t    \"username\" : \"bron\",\n\t\t    \"phno\" : 9822222222,\n\t\t    \"status\" : false\n\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\t\t\t    \"message\": \"1 records(s) updated\"\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "User"
  }
] });
