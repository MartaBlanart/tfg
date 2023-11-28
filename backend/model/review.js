const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  // Otros campos que puedas necesitar
});

const reviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [commentSchema],
  // Otros campos que puedas necesitar
});

module.exports = mongoose.model('Review', reviewSchema);
