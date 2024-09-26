const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sessionId: String,
  questions: [{ question: String, answer: String }],
  startTime: { type: Date, default: Date.now },
  endTime: Date,
  questionIndex: { type: Number, default: 0 },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
