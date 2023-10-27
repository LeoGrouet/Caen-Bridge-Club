const competitionControllers = require("../../serveur/controllers/competitionDateController");

const getNextCompetitionMiddleware = async function (req, res, next) {
  try {
    const nextComp = await competitionControllers.findNextCompetition();

    // Créez une fonction de formatage de date
    function formatNextCompetitionDate() {
      const originalDate = new Date(nextComp.date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return originalDate.toLocaleDateString("fr-FR", options);
    }

    // Ajoutez nextCompetition aux variables locales pour y accéder dans les vues
    res.locals.nextCompetition = formatNextCompetitionDate();

    // Passez à la prochaine middleware ou au contrôleur
    next();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur lors de la récupération de la prochaine compétition.");
  }
};

module.exports = getNextCompetitionMiddleware;
