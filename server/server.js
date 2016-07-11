'use strict';

let express = require('express')
  , path = require('path')
  , app = express();

app.use(express.static(path.join(__dirname, '../front/src/dist')));

app.listen(7777, function () {
	console.log('server', 7777);
});
