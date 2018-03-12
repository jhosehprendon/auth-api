//Main starting point of the App

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//DB Setup
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jhosehp:123@ds031651.mlab.com:31651/jhosehp-auth-api');
// mongodb://localhost:27017/auth

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);


//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);




