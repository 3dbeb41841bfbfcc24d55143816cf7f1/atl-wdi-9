var express = require('express');
var app = express();

var criminalsRoutes = require(__dirname + '/server/routes/criminalRoutes.js');
app.use('/criminals', criminalsRoutes);

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function () {
	console.log('criminals app listening on port 3000');
});