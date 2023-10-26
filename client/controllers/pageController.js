const adminControllers = require("../../serveur/controllers/adminController");
const memberControllers = require("../../serveur/controllers/memberController");
const competitionControllers = require("../../serveur/controllers/competitionDateController");

const pageController = {
  // méthode pour la page d'accueil
  homePage: async function (req, res) {
    try {
      const members = await memberControllers.findAllMembers();
      const nextComp = await competitionControllers.findNextCompetition();

      // Créez une fonction de formatage de date
      function formatNextCompetitionDate() {
        const originalDate = new Date(nextComp.date); // Supposons que la date se trouve dans la propriété "date"
        const options = { year: "numeric", month: "long", day: "numeric" };
        return originalDate.toLocaleDateString("fr-FR", options);
      }
      console.log("lorem", formatNextCompetitionDate());
      res.render("home", {
        members,
        nextCompetition: formatNextCompetitionDate(),
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
