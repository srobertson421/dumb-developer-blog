var express = require("express");
var router = express.Router();

var Post = require('../models/post.js').model;

router.route('/')
.get(function(req, res) {
  Post.find({}, function(err, posts) {
    if (err) return res.send(err);
    res.send(posts);
  });
})
.post(function(req, res) {
  console.log(req.body);
});

module.exports = router;