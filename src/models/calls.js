const mongoose = require("mongoose");

const callSchema = new mongoose.Schema({
  from: String,
  to: String,
  status: String,
  duration: String,
  voicemailUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Call", callSchema);
