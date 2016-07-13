'use strict';

let express = require('express')
  , path = require('path')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , passport = require('passport')
  , flash = require('connect-flash')
  , morgan = require('morgan')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , database = require('./config/database.js')
  , app = express()
  , userController = require('./controllers/userController.js')
  ;

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
// require('./config/passport')(passport); // pass passport for configuration
// required for passport
app.use(session({ secret: 'hairydogballs' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(path.join(__dirname, '../front/src/dist')));
app.use(bodyParser.json());
app.use('/api', userController);
require('./routes/routes.js')(app, passport);
app.listen(7777, function () {
	console.log('server', 7777);
});

mongoose.connect(database.url);
