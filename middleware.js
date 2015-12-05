var middleware = {
	requireAuthentication: function(req, res, next) { // If the user is logged in, then run 'next'. Run route specific function. 
		console.log('private route hit!');
		next();
	}, // route-level middleware
	logger: function(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;