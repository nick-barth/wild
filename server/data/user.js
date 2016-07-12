var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	tagline: String
});

module.exports = mongoose.model('user', userSchema);
