'use strict';

let express = require('express')
  , path = require('path')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , userController = require('./controllers/userController.js')
  ;

app.use(express.static(path.join(__dirname, '../front/src/dist')));
app.use(bodyParser.json());
app.use('/api', userController);

app.listen(7777, function () {
	console.log('server', 7777);
});

mongoose.connect('mongodb://localhost/');
