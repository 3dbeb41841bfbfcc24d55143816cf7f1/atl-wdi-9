var express = require('express');
var router = express.Router({mergreParams: true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require("../models/project_idea");

module.exports = router;
