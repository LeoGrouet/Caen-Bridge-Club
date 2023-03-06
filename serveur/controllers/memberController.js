const Members = require("../models/modelMember");

const memberControllers = {
  addMember: async (req, res) => {
    const newMember = new Members({
      name: req.body.name,
      lastName: req.body.lastName,
      role: req.body.role,
    });

    try {
      await newMember.save();
      console.log("New member added successfully!");
      res.redirect("/admin"); // Redirige vers une page de liste de membres
    } catch (err) {
      console.log(err);
      res.status(500).send("Error adding member");
    }
  },

  findAllMembers: async (req, res) => {
    try {
      const members = await Members.find({});
      return members;
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving members");
    }
  },

  deleteMember: async (req, res) => {
    const memberId = req.body._id;
    try {
      await Members.findByIdAndDelete(memberId);
      console.log("Member deleted successfully!");
      res.redirect("/admin"); // Redirige vers une page de liste de membres
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting member");
    }
  },
};

module.exports = memberControllers;
