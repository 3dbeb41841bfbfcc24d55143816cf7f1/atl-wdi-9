var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('I am criminals');
});

module.exports = router;
