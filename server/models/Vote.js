const mongoose = require('mongoose');
const VoteSchema = new mongoose.Schema({
  candidate: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }
});
module.exports = mongoose.model('Vote', VoteSchema);