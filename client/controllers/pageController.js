const memberControllers = require("../../serveur/controllers/memberController");

const pageController = {
  // méthode pour la page d'accueil
  homePage: async function (req, res) {
    const members = await memberControllers.findAllMembers();
    console.log(members);
    res.render("index", {
      members: members,
    });
  },

  schedule: async function (req, res) {
    console.log("coucou");
    res.render("schedule");
  },

  admin: async function (req, res) {
    console.log("Coucou");
    res.render("admin");
  },
};

module.exports = pageController;
