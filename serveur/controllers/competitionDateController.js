const CompetitionDate = require("../models/modelCompetitionDate");

const competitionDateControllers = {
  addCompetition: async (req, res) => {
    const newCompetition = new CompetitionDate({
      name: req.body.name,
      date: req.body.date,
    });
    try {
      await newCompetition.save();
      console.log("New Competition added successfully!");
      res.redirect("/admin"); // Redirige vers la page admin
    } catch (err) {
      console.log(err);
      res.status(500).send("Error adding competition");
    }
  },

  findOneCompetition: async (req, res) => {
    try {
      const { name, date } = req.body;
      console.log(req.body);
      const competition = await CompetitionDate.findOne({
        name,
        date,
      });
      if (!competition) {
        return res.status(404).send("Competition not found");
      }
      return competition;
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving Competition");
    }
  },

  findAllCompetition: async (req, res) => {
    try {
      const competition = await CompetitionDate.find({});
      return competition;
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving Competition");
    }
  },

  findNextCompetition: async (req, res) => {
    try {
      // Recherchez la prochaine compétition en triant par date dans l'ordre croissant (la plus proche en premier)
      const nextCompetition = await CompetitionDate.findOne({
        date: { $gte: new Date() }, // Recherchez les compétitions dont la date est supérieure ou égale à la date actuelle
      }).sort("date");
      if (nextCompetition) {
        // Supposons que vous avez la date d'origine sous la forme "2023-12-26"
        const originalDateStr = nextCompetition.date;

        // Convertissez la chaîne en objet Date
        const originalDate = new Date(originalDateStr);

        // Options de formatage pour les mois
        const options = { year: "numeric", month: "long", day: "numeric" };

        // Formatez la date en "26 Décembre 2023"
        const formattedDate = originalDate.toLocaleDateString("fr-FR", options);

        return nextCompetition;
      } else {
        res.status(404).send("Aucune compétition future trouvée.");
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Erreur lors de la recherche de la compétition suivante.");
    }
  },

  deleteCompetition: async (req, res) => {
    const competitionDate = req.params.date; // la date de la competition à supprimer
    try {
      const deletedCompetition = await competitionDate.findByIdAndRemove(
        competitionDate
      );
      console.log("Member deleted successfully!");
      return deletedCompetition;
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting member");
    }
  },
};

module.exports = competitionDateControllers;
