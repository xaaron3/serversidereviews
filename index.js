// Main starting point of app.
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');         // http request logger 
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// db setup
mongoose.connect('mongodb://admin:password3@ds163905.mlab.com:63905/servertesting', { useNewUrlParser: true, useCreateIndex: true });
// nodemon.js, auto restart when code changes



// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // create http (native node library) server for working low lvl http requests incoming. Anything coming in, forward on to the app (express)
server.listen(port);
console.log('Server is lisTening on:', port);