const memberControllers = require("../../serveur/controllers/memberController");

const pageController = {
  // méthode pour la page d'accueil
  homePage: async function (req, res) {
    const members = await memberControllers.findAllMembers();
    res.render("index", {
      members: members,
    });
  },

  schedule: async function (req, res) {
    res.render("schedule");
  },

  admin: async function (req, res) {
    console.log("Coucou");
    const members = await memberControllers.findAllMembers();
    res.render("admin", {
      members: members,
    });
  },
};

module.exports = pageController;
