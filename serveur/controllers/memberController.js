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
    try {
      const member = await Members.findByNameAndDelete(req.params.name);
      console.log("bite");
      if (!member) {
        return res.status(404).send({ error: "Member not found" });
      }
      res.redirect("/admin"); // Redirige vers une page de liste de membres
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Server error" });
    }
  },
};

module.exports = memberControllers;
