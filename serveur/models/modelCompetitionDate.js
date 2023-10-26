const mongoose = require("mongoose");

const CompetitionDate = mongoose.model("CompetitionDate", {
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = CompetitionDate;
