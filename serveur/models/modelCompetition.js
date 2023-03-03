const mongoose = require("mongoose");

const Competition = mongoose.model("Competition", {
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = Competition;
