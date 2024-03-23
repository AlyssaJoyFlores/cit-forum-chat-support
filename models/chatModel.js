// faqModel.js

const mongoose = require('mongoose');


const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true // Each question should be unique
  },
  answer: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
