var express = require('express')
var bodyParser = require('body-Parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
	res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2] || 3000)
