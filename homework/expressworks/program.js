// 1

  var express = require('express');
  var app = express();

  app.get('/home', function(req, res) {
  res.end('Hello World!')
  });

    app.listen(process.argv[2] || 3000); //not what the directions say

//2

  var path = require('path');
  var express = require('express')
  var app = express()

  app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

  app.listen(process.argv[2]) 

//3

var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.set('views', process.argv[3]) //in real life your would have a directory here
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

//4

var express = require('express')
var bodyParser = require('body-Parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
	res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2] || 3000)

//6
var express = require('express')
var app = express()

app.put('/message/:id', (req, res) => {
	var id = req.params.id
	var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
	res.send(str)
})

app.listen(process.argv[2] || 3000)

//7

var express = require('express')
var app = express()

app.get('/search', function(req, res) {
	var query = req.query
	res.send(query)
})

app.listen(process.argv[2] || 3000)