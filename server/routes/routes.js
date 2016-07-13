module.exports = function (app, passport) {

	app.get('/', function (req, res) {
		res.render('../../front/src/dist/index.html'); // load the index.ejs file
	});

	// process the login form
	// app.post('/login', do all our passport stuff here);

	app.get('/signup', function (req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.html', { message: req.flash('signupMessage') });
	});

	// process the signup form
	// app.post('/signup', do all our passport stuff here);

	app.get('/profile', isLoggedIn, function (req, res) {
		res.render('profile.html', {
			user: req.user // get the user out of session and pass to template
		});
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()) {
		return next();
	}

	// if they aren't redirect them to the home page
	res.redirect('/');
}
