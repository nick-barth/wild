var User = require('../data/user');
var router = require('express').Router();
var _ = require('lodash');

router.route('/user/:id?').get(getUsers).post(addUser).delete(deleteUser);

function getUsers (req, res) {
	User.find(function (err, users) {
		if (err) {
			res.send(err);
		}
		else {
			res.json(users);
		}
	});
}

function addUser (req, res) {
	var user = new User(_.assign({}, req.body));
	user.save(function (err) {
		if (err) {
			res.send(err);
		}
		else {
			res.json(user);
		}
	});
}

function deleteUser (req, res) {
	var id = req.params.id;
	User.remove({ _id: id }, function (err, removed) {
		if (err) {
			res.send(err);
		}
		else {
			res.json(removed);
		}
	});
}

module.exports = router;
