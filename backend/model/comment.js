const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  reviewId: Number,
  username: String,
  content: String,
});

module.exports = mongoose.model('Comment', commentSchema);
