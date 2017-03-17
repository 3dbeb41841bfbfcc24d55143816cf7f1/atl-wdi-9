var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.set('views', process.argv[3]) //in real life your would have a directory here
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
