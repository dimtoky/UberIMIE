const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  date: {
    type: Date
    }
});


module.exports = mongoose.model("HistoryUser", historySchema);