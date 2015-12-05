var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
// app.use(middleware.requireAuthentication); // specify middleware above the route
// app.get('/', function(req, res) { // 'get' corresponds to http request method. View browser is a get request. Others: put, patch, delete.
// 	res.send('Hello Express!');
// }); // Takes two arguments. The first is the route. The second is the function. Req is what the user provides. Res is what you want to send back.

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public')); // setting static server
// console.log(__dirname);

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT + '!');
}); // Listen to port 3000. Function gets called once server starts