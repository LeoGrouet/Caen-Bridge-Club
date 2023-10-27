const adminControllers = require("../../serveur/controllers/adminController");
const memberControllers = require("../../serveur/controllers/memberController");
const competitionControllers = require("../../serveur/controllers/competitionDateController");

const pageController = {
  // méthode pour la page d'accueil
  homePage: async function (req, res) {
    try {
      const members = await memberControllers.findAllMembers();

      res.render("home", {
        members,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur lors du chargement de la page d'accueil.");
    }
  },

  schedule: async function (req, res) {
    res.render("schedule");
  },

  loginPage: async function (req, res) {
    res.render("loginpage");
  },

  admin: async function (req, res) {
    const members = await memberControllers.findAllMembers();
    const admins = await adminControllers.findAllAdmins();
    const competitions = await competitionControllers.findAllCompetition();

    res.render("admin", {
      members: members,
      admins: admins,
      competitions: competitions,
    });
  },
};

module.exports = pageController;
