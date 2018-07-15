process.env.APP_ENV = 'local'
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routes = require('./routes');
require('./config')
const middlewares = require('./middlewares');
app.use(bodyParser.json()); // for parsing application/json

app.use('/doc', express.static('doc'))
/**
 * Middleware route declarations
 */
app.use('/user', middlewares.connectMongo('user') , routes.userRoutes())

app.use('/hotels', middlewares.connectMongo('hotels'), routes.hotelRoutes())

app.use('/rooms', middlewares.connectMongo('rooms') , routes.roomRoutes())

app.use('/bookings', middlewares.connectMongo('bookings') , routes.bookingRoutes())

app.listen(process.env.port, () => console.log(`App listening on port ${process.env.port}!`))