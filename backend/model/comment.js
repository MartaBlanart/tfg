const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  // Otros campos que puedas necesitar
});

module.exports = mongoose.model('Comment', commentSchema);
