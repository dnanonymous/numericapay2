const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apiKey: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Merchant', merchantSchema);
