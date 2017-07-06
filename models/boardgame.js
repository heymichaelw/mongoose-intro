const mongoose = require('mongoose');

const boardgameSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  playerCount: Number,
  playTime: Number,
  style: [String],
  company: {
    name: { type: String, required: true },
    designer: String,
    location: String
  }
});

const Boardgame = mongoose.model('Boardgame', boardgameSchema);

module.exports = Boardgame;
