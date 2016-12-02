var express = require('express');
var router = express.Router();

var Tag = require('../models/tag.js').model;

router.route('/')
.get(function(req, res) {
  Tag.find({}, function(err, tags) {
    if (err) return res.send(err);
    res.send(tags);
  });
});

module.exports = router;