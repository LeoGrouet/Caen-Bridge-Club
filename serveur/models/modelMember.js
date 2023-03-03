const mongoose = require("mongoose");

const Members = mongoose.model("Members", {
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = Members;
