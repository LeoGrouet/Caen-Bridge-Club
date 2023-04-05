const adminControllers = require("../../serveur/controllers/adminController");
const memberControllers = require("../../serveur/controllers/memberController");

const pageController = {
  // méthode pour la page d'accueil
  homePage: async function (req, res) {
    const members = await memberControllers.findAllMembers();
    res.render("home", {
      members
    });
  },

  schedule: async function (req, res) {
    res.render("schedule");
  },

  admin: async function (req, res) {
    const members = await memberControllers.findAllMembers();
    const admins = await adminControllers.findAllAdmins();
    res.render("admin", {
      members: members,
      admins: admins,
    });
  },
};

module.exports = pageController;