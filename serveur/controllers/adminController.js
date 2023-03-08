const Admin = require("../models/modelAdmin");

const adminControllers = {
  addAdmin: async (req, res) => {
    const newAdmin = new Admin({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(req.body.email), console.log(req.body.password);
    try {
      await newAdmin.save();
      console.log("New Admin added successfully!");
      res.redirect("/admin"); // Redirige vers une page de liste de membres
    } catch (err) {
      console.log(err);
      res.status(500).send("Error adding member");
    }
  },

  findOneAdmin: async (req, res) => {
    try {
      const admin = await Admin.findOne(
        {email: req.body.email},
        {password: req.body.password}
      );
      return admin;
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving Admin");
    }
  },

  deleteAdmin: async (req, res) => {
    console.log("bite");
    const memberName = req.params.name; // l'ID du membre à supprimer
    try {
      const deletedMember = await Members.findByIdAndRemove(memberName);
      console.log("Member deleted successfully!");
      return deletedMember;
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting member");
    }
  },
};

module.exports = adminControllers;
