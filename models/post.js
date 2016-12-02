var mongoose = require('mongoose');
var TagSchema = require('./tag.js').schema;

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  tags: [TagSchema]
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  model: Post,
  schema: postSchema
}