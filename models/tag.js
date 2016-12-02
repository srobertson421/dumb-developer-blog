var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  title: String
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = {
  model: Tag,
  schema: tagSchema
}