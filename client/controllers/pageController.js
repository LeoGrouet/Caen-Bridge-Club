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
    res.render("admin", {
      members
    });
  },
};

module.exports = pageController;