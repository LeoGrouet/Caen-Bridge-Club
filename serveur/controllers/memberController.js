const Members = require("../models/modelMember");

const memberControllers = {
  addMember: async (req, res) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const role = req.body.role;
    const newMember = new Members({
      name: name,
      lastName: lastName,
      role: role
    })
    const verifyIfExist = await Members.findOne(newMember.lastName);
    if(verifyIfExist === lastName){
      console.log("New Member already exist")
      res.redirect("/admin"); // Redirige vers une page de liste de membres
    } else if (verifyIfExist = false){
    try {
      await newMember.save();
      console.log("New member added successfully!");
      res.redirect("/admin"); // Redirige vers une page de liste de membres
    } catch (err) {
      console.log(err);
      res.status(500).send("Error adding member");
    }
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
